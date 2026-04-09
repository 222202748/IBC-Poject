/* =============================================
   components.js — Topbar, Nav, Mobile Menu, Footer
   ============================================= */

// ── TOP BAR ──
document.getElementById('topbar-placeholder').innerHTML = `
<div class="topbar">
  <span>📞 +91 78456 06488&nbsp;|&nbsp; ✉️ <a href="mailto: indiaiblecollege2024@gmail.com">indiaiblecollege2024@gmail.com</a></span>
</div>`;

// ── NAVIGATION ──
document.getElementById('nav-placeholder').innerHTML = `
<nav>
  <div class="logo-wrap">
    <div class="logo-text">
      <strong>India Bible College</strong>
      <span>Est. 2024</span>
    </div>
  </div>
  <ul class="nav-links">
    <li><a href="#home"      id="nav-home">Home</a></li>
    <li><a href="#about"     id="nav-about">About Us</a></li>
    <li><a href="#courses"   id="nav-courses">Programmes</a></li>
    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfP92Rwlg3dZLcy_mJ5zDNDnOsGs8U6LGr_KCuuNkY7w19FYw/viewform?usp=header" target="_blank" rel="noopener noreferrer" id="nav-admission">Admission</a></li>
    <li><a href="#gallery"   id="nav-gallery">Gallery</a></li>
    <li><a href="#contact"   id="nav-contact" class="nav-cta">Contact</a></li>
  </ul>
  <div class="hamburger" onclick="toggleMenu()">
    <span></span><span></span><span></span>
  </div>
</nav>`;

// ── MOBILE MENU ──
document.getElementById('mobile-menu-placeholder').innerHTML = `
<div class="mobile-menu" id="mobileMenu">
  <a href="#home" onclick="toggleMenu()">Home</a>
  <a href="#about" onclick="toggleMenu()">About Us</a>
  <a href="#courses" onclick="toggleMenu()">Programmes</a>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfP92Rwlg3dZLcy_mJ5zDNDnOsGs8U6LGr_KCuuNkY7w19FYw/viewform?usp=header" target="_blank" rel="noopener noreferrer" onclick="toggleMenu()">Admission</a>
  <a href="#gallery" onclick="toggleMenu()">Gallery</a>
  <a href="#contact" onclick="toggleMenu()">Contact</a>
</div>`;

// ── FOOTER ──
document.getElementById('footer-placeholder').innerHTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo" style="display: flex; align-items: center; gap: 10px; margin-bottom: 0.5rem;">
        <img src="js/icons/WhatsApp_Image_2026-02-25_at_1.26.35_PM-removebg-preview.ico" alt="IBC Logo" style="height: 50px;">
        <div>India <span>Bible</span> College</div>
      </div>
      <div class="footer-sub"> Est. 2024 · No. 173/2-B, Roja Thotta, Kadeshanagar,Irumbuliyur,Chennai, Tamil Nadu,India</div>
      <p>Raising faithful servants of God for over 2 years. Rooted in Scripture. Called to serve. Sent to the nations.</p>
      <div class="footer-verse">He is the one we proclaim, admonishing and teaching everyone with all wisdom, so that we may present everyone fully mature in Christ. — Colossians - 1 : 28</div>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#courses">Programmes</a></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfP92Rwlg3dZLcy_mJ5zDNDnOsGs8U6LGr_KCuuNkY7w19FYw/viewform?usp=header" target="_blank" rel="noopener noreferrer">Admission</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Programmes</h4>
      <ul>
       <li><a>Certificate in Theology</a></li>
       <li><a>Diploma in Theology</a></li>
       <li><a>Bachelor of Theology</a></li>
        <li><a>Master of Divinity</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a>📍No. 173/2-B, Roja Thotta, Kadeshanagar,Irumbuliyur,Chennai, Tamil Nadu,India.</a></li>
        <li><a>📞 +91 78456 06488</a></li>
        <li><a>✉️ indiabiblecollege2024@gmail.com</a></li>
        <li><a href="#contact">Send a Message</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 <span>India Bible College</span>. All rights reserved.</p>
    <p>Affiliation with Dayspring Theological University, Texas, USA. & Accredited by Nations Associations For Theological Accreditation, (NATA), Bangalore, India.</p>
  </div>
</footer>`;
