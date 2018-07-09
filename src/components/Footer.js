import React from 'react';

const Footer = () => {
  return (
    <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
      <small class="f6 db tc">© 2018 AL CENTRO DEL MONDO s.r.l. Unipersonale</small>
      <div class="tc mt3">
        <a class="f6 dib ph2 link mid-gray dim" href="mailto:info@alcentrodelmondo.it" target="_blank" rel="noopener noreferrer" title="Al Centro del Mondo Email">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
        <a className="f6 dib ph2 link mid-gray dim" href="https://www.facebook.com/Al-Centro-del-Mondo-Viaggi-e-Turismo-113138121866/" target="_blank" rel="noopener noreferrer" title="Al Centro del Mondo on Facebook">
          <i className="fab fa-facebook-f fa-2x"></i>
        </a>
        <a class="f6 dib ph2 link mid-gray dim" href="https://twitter.com/AlCentrodelMond" target="_blank" rel="noopener noreferrer" title="Al Centro del Mondo on Twitter">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer;