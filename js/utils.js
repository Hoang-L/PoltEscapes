/* ===================== SHARED UTILITIES ===================== */

const STAR_COLORS = {
  1: '#6060a0',
  2: '#facc15',
  3: '#f97316',
  4: '#22c55e',
  5: '#ff2d9b',
};

const STAR_GLOWS = {
  1: 'none',
  2: '0 0 4px rgba(250,204,21,0.4)',
  3: '0 0 8px rgba(249,115,22,0.6)',
  4: '0 0 12px rgba(34,197,94,0.7)',
  5: '0 0 18px rgba(255,45,155,0.9)',
};

function starsHTML(n, max = 5) {
  if (!n) return '<span style="color:var(--text-3);font-size:0.8rem;">—</span>';
  const color = STAR_COLORS[n];
  const glow  = STAR_GLOWS[n];
  const style = color
    ? `color:${color};text-shadow:${glow};`
    : `color:var(--text-3);`;
  let h = `<span class="stars">`;
  for (let i = 1; i <= max; i++) {
   if (i <= n) {
     h += `<span style="color:${color};text-shadow:${glow};">★</span>`;
   } else {
     h += `<span style="color:var(--bg-3);text-shadow:none;">★</span>`;
   }
  }
  return h + '</span>';
}

function formatDate(d) {
  return new Date(d + 'T12:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function difficultyBadge(d) {
  return '';
}

function outcomeBadge(o) {
  return o === 'escaped'
    ? '<span class="badge badge-escaped">✓ Escaped</span>'
    : '<span class="badge badge-failed">✗ Failed</span>';
}

function locationStr(r) {
  return [r.city, r.state || r.country].filter(Boolean).join(', ');
}

function timeBadge(t) {
  return t ? `<span class="badge badge-time">⏱ ${t}</span>` : '';
}

function roomEmoji(i) {
  return ['🔐','🗝️','💀','⚗️','🔮','📜','🕯️','🏺','🧩','🔭','🧲','🪤'][i % 12];
}

function roomPhoto(r) {
  return r.photo || `images/${r.id}.${IMAGE_EXTENSIONS[0]}`;
}

/* Stats derived from ROOMS */
function computeStats() {
  const total = ROOMS.length;
  const escaped = ROOMS.filter(r => r.outcome === 'escaped').length;
  const ratings = ROOMS.filter(r => r.rating);
  const avgRating = ratings.length
    ? (ratings.reduce((s, r) => s + r.rating, 0) / ratings.length).toFixed(1)
    : '—';
  const countries = new Set(ROOMS.map(r => r.country)).size;
  const states = new Set(ROOMS.filter(r => r.state).map(r => r.state)).size;
  return { total, escaped, failed: total - escaped, rate: Math.round(escaped / total * 100), avgRating, countries, states };
}

/* Inject nav active state */
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    a.classList.toggle('active', href === page || (page === '' && href === 'index.html'));
  });
}

document.addEventListener('DOMContentLoaded', setActiveNav);
