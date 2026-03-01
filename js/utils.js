/* ===================== SHARED UTILITIES ===================== */

function starsHTML(n, max = 5) {
  if (!n) return '<span style="color:var(--text-3);font-size:0.8rem;">—</span>';
  let h = '<span class="stars">';
  for (let i = 1; i <= max; i++) h += `<span class="${i <= n ? '' : 'off'}">★</span>`;
  return h + '</span>';
}

function formatDate(d) {
  return new Date(d + 'T12:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function difficultyBadge(d) {
  if (!d) return '';
  return `<span class="badge badge-diff-${d}">${d}</span>`;
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
