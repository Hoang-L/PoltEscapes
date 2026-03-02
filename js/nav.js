/* Injects the site nav — called on every page */
function injectNav(root = '') {
  const nav = `
  <nav class="nav">
    <a class="nav-logo" href="${root}index.html">
      <span class="dot"></span> Polt Escapes
    </a>
    <ul class="nav-links">
      <li><a href="${root}index.html"><span>🏠</span> <span>Home</span></a></li>
      <li><a href="${root}pages/map.html"><span>🗺</span> <span>Map</span></a></li>
      <li><a href="${root}pages/scrapbook.html"><span>📖</span> <span>Photos</span></a></li>
      <li><a href="${root}pages/log.html"><span>📋</span> <span>All Rooms</span></a></li>
	  <li><a href="${root}pages/analytics.html"><span>📊</span> <span>Stats</span></a></li>
    </ul>
  </nav>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
  
}
