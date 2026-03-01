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

function roomPhoto(r) {
  const base = `/PoltEscapes/images/${r.id}`;
  const src  = r.photo && r.photo !== '' ? r.photo : `${base}.${IMAGE_EXTENSIONS[0]}`;
  return `<img src="${src}" alt="${r.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;" onerror="console.log('onerror fired for ${r.id}');this.onerror=null;this.src='${base}.${IMAGE_EXTENSIONS[1]}';">`;
}

// function roomPhoto(r) {
//   const base = `/PoltEscapes/images/${r.id}`;
//   const src  = r.photo || `${base}.${IMAGE_EXTENSIONS[0]}`;
//   const fb   = roomEmoji(parseInt(r.id));

//   // Build nested onerror chain from right to left
//   let chain = `this.parentNode.innerHTML='${fb}'`;
//   for (let i = IMAGE_EXTENSIONS.length - 1; i >= 1; i--) {
//     chain = `this.src='${base}.${IMAGE_EXTENSIONS[i]}';this.onerror=function(){${chain}};`;
//   }

//   return `<img src="${src}" alt="${r.name}" style="width:100%;height:100%;object-fit:cover;" onerror="${chain}">`;
// }

// function roomPhoto(r) {
//   return r.photo || `images/${r.id}.${IMAGE_EXTENSIONS[0]}`;
// }

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
