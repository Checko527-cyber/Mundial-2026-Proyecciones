// api/scores.js — Vercel Serverless Function (ESM)
// Fuente FT:   openfootball/worldcup.json   → resultados finales (sin API key)
// Fuente LIVE: API-Football                 → partidos en curso minuto a minuto
//              (requiere API key en variable de entorno API_FOOTBALL_KEY)

import https from 'https';

const OPF_URL = 'https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json';
const APF_HOST = 'v3.football.api-sports.io';

function fetchJSON(url, reqHeaders = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Vercel-Mundial2026/1.0', 'Accept': 'application/json', ...reqHeaders } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302)
        return fetchJSON(res.headers.location, reqHeaders).then(resolve).catch(reject);
      if (res.statusCode !== 200)
        return reject(new Error(`HTTP ${res.statusCode}`));
      let data = '';
      res.on('data', c => { data += c; });
      res.on('end', () => { try { resolve(JSON.parse(data)); } catch(e) { reject(new Error('JSON parse: ' + e.message)); } });
    });
    req.on('error', reject);
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

function apfGet(path, apiKey) {
  return fetchJSON(`https://${APF_HOST}${path}`, {
    'x-apisports-key': apiKey,
    'x-rapidapi-key':  apiKey,
    'x-rapidapi-host': APF_HOST,
  });
}

function norm(n) {
  return (n || '').toLowerCase()
    .replace(/[àáâä]/g,'a').replace(/[èéêë]/g,'e')
    .replace(/[ìíîï]/g,'i').replace(/[òóôö]/g,'o')
    .replace(/[ùúûü]/g,'u').replace(/ñ/g,'n').replace(/ç/g,'c')
    .replace(/[^a-z0-9 .]/g,' ').replace(/\s+/g,' ').trim();
}

const CANON = {
  'korea republic': 'South Korea', 'bosnia': 'Bosnia & Herzegovina',
  'ivory coast': 'Ivory Coast',    'dr congo': 'DR Congo',
  'usa': 'United States',          'england': 'England',
};
function canon(name) {
  const n = norm(name);
  for (const [k, v] of Object.entries(CANON)) { if (norm(k) === n) return v; }
  return name;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-maxage=180, stale-while-revalidate=60');

  try {
    // ── 1. Openfootball: resultados finales ───────────────────────────────
    const opfData = await fetchJSON(OPF_URL);
    const opfRaw  = opfData.matches || [];

    const matches = opfRaw.map(m => {
      const hasFT = !!(m.score && m.score.ft);
      return {
        home:    canon(m.team1),
        away:    canon(m.team2),
        homeRaw: m.team1,
        awayRaw: m.team2,
        goalsH:  hasFT ? m.score.ft[0] : null,
        goalsA:  hasFT ? m.score.ft[1] : null,
        status:  hasFT ? 'FT' : 'NS',
        elapsed: null,
        pen:     (m.score && m.score.p) ? (m.score.p[0] > m.score.p[1] ? 'H' : 'A') : null,
        date:    m.date || '',
        group:   m.group || '',
      };
    });

    // ── 2. API-Football: partidos en vivo (solo si hay key) ───────────────
    const apiKey = process.env.API_FOOTBALL_KEY;
    if (apiKey) {
      try {
        const liveData = await apfGet('/fixtures?league=1&season=2026&live=all', apiKey);
        const liveFixtures = liveData.response || [];

        liveFixtures.forEach(f => {
          const home    = f.teams.home.name;
          const away    = f.teams.away.name;
          const status  = f.fixture.status.short;
          const elapsed = f.fixture.status.elapsed;
          const goalsH  = f.goals.home;
          const goalsA  = f.goals.away;

          const hn = norm(home), an = norm(away);
          const existing = matches.find(m => norm(m.home) === hn && norm(m.away) === an);
          if (existing) {
            existing.status  = status;
            existing.elapsed = elapsed;
            existing.goalsH  = goalsH;
            existing.goalsA  = goalsA;
          } else {
            matches.push({ home, away, homeRaw: home, awayRaw: away, goalsH, goalsA, status, elapsed, pen: null, date: '', group: '' });
          }
        });
      } catch (liveErr) {
        console.error('Live fetch error:', liveErr.message);
      }
    }

    const played = matches.filter(m => m.status === 'FT').length;
    const live   = matches.filter(m => ['1H','HT','2H','ET','BT','P'].includes(m.status)).length;

    return res.status(200).json({
      matches, total: matches.length, played, live,
      source: 'openfootball' + (apiKey ? '+api-football' : ''), ts: Date.now(),
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message,
      hint:  'No se pudo conectar a GitHub. Intenta en unos minutos.',
    });
  }
}
