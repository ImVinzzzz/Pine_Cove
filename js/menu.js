/* ============================================================
   I SEGRETI DI PINE COVE — Navigation Menu
   ============================================================ */

(function () {
  const pages = [
    { href: 'index.html',         icon: 'fa-solid fa-house',           label: 'Home' },
    { href: 'autore.html',        icon: 'fa-solid fa-book-open',       label: 'Manuale' },
    { href: 'ambientazione.html', icon: 'fa-solid fa-map-location-dot',label: 'Pine Cove' },
    { href: 'personaggi.html',    icon: 'fa-solid fa-users',           label: 'Personaggi' },
    { href: 'episodi.html',       icon: 'fa-solid fa-clapperboard',    label: 'Episodi' },
  ];

  // Determine active page
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  // Build nav HTML
  const linksHTML = pages.map(p => {
    const isActive = currentFile === p.href ||
      (p.href === 'episodi.html' && currentFile.startsWith('episodio-'));
    return `
      <a href="${p.href}" class="${isActive ? 'active' : ''}" aria-current="${isActive ? 'page' : ''}">
        <i class="${p.icon}" aria-hidden="true"></i>
        <span>${p.label}</span>
      </a>`;
  }).join('');

  const navHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-brand" aria-label="I Segreti di Pine Cove – Home">
        <div class="nav-brand-icon" aria-hidden="true">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="nav-brand-text">
          <span class="nav-brand-title">I Segreti di Pine Cove</span>
          <span class="nav-brand-sub">Giallo da Tavolo</span>
        </div>
      </a>
      <nav class="nav-links" id="nav-links" role="navigation" aria-label="Menu principale">
        ${linksHTML}
      </nav>
      <button class="nav-hamburger" id="nav-toggle" aria-label="Apri menu" aria-expanded="false" aria-controls="nav-links">
        <i class="fa-solid fa-bars" id="hamburger-icon"></i>
      </button>
    </div>`;

  const navEl = document.getElementById('main-nav');
  if (navEl) {
    navEl.innerHTML = navHTML;

    // Hamburger toggle
    const toggle = document.getElementById('nav-toggle');
    const links  = document.getElementById('nav-links');
    const icon   = document.getElementById('hamburger-icon');

    if (toggle && links) {
      toggle.addEventListener('click', () => {
        const isOpen = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen);
        icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!navEl.contains(e.target)) {
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          icon.className = 'fa-solid fa-bars';
        }
      });

      // Close on link click (mobile)
      links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          icon.className = 'fa-solid fa-bars';
        });
      });
    }
  }
})();
