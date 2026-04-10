/* ============================================================
   I SEGRETI DI PINE COVE — Footer (iniettato via JS)
   ============================================================ */

(function () {
  const footerHTML = `
    <div class="container">
      <div class="footer-grid">

        <div class="footer-brand">
          <h3>I Segreti di Pine Cove</h3>
          <p>Un gioco di ruolo cozy mystery ambientato nella pittoresca cittadina costiera del Maine. Unitevi al Club del Mistero e risolvete l'irrisolvibile.</p>
        </div>

        <div class="footer-col">
          <h4>Navigazione</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="autore.html">Manuale dell'Autore</a></li>
            <li><a href="ambientazione.html">Pine Cove</a></li>
            <li><a href="personaggi.html">Personaggi</a></li>
            <li><a href="episodi.html">Episodi</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Download</h4>
          <ul>
            <li>
              <a href="assets/manuale-autore.pdf" download>
                <i class="fa-solid fa-file-pdf" aria-hidden="true"></i>
                Manuale dell'Autore
              </a>
            </li>
            <li>
              <a href="assets/manuale-giocatore.pdf" download>
                <i class="fa-solid fa-file-pdf" aria-hidden="true"></i>
                Manuale del Giocatore
              </a>
            </li>
          </ul>
        </div>

      </div><!-- /.footer-grid -->

      <div class="footer-bottom">
        <p>© 2026 I Segreti di Pine Cove — Versione 1.1</p>
        <div class="footer-badge">
          <i class="fa-solid fa-skull-crossbones" aria-hidden="true"></i>
          Un crimine al giorno…
        </div>
      </div>

    </div><!-- /.container -->`;

  const footerEl = document.getElementById('main-footer');
  if (footerEl) {
    footerEl.innerHTML = footerHTML;
  }
})();
