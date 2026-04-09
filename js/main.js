/* =============================================
   main.js — Navigation & Utility Functions
   ============================================= */

/**
 * Switch between pages
 * @param {string} id - page name
 */
function showPage(id) {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  // Swap content from PAGES object
  if (PAGES[id]) {
    mainContent.innerHTML = PAGES[id];
  } else {
    // Fallback to home if page doesn't exist
    mainContent.innerHTML = PAGES['home'];
    id = 'home';
  }

  // Remove active from all nav links
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  // Set active nav link
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');

  // Special handling for Gallery page
  if (id === 'gallery') {
    renderGalleryPhotos();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ══════════════════════════════════════════════
   GALLERY LOGIC
══════════════════════════════════════════════ */

/**
 * Filter gallery items by category.
 */
function filterGallery(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.gallery-item').forEach(item => {
    const itemCat = item.getAttribute('data-category');
    if (cat === 'all' || itemCat === cat) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

/**
 * Render uploaded photos into the gallery grid
 */
function renderGalleryPhotos() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const galleryPhotos = JSON.parse(localStorage.getItem('ibc_gallery_photos') || '[]');
  
  // Remove any existing "uploaded" items first to avoid duplicates
  document.querySelectorAll('.gallery-item.uploaded').forEach(el => el.remove());

  galleryPhotos.forEach(photo => {
    const item = document.createElement('div');
    item.className = 'gallery-item uploaded';
    item.setAttribute('data-category', 'graduates');
    item.innerHTML = `
      <div class="gallery-img">
        <img class="gallery-img-real" src="${photo.src}" alt="${photo.name}">
        <div class="gallery-overlay"><div class="gallery-overlay-icon">🔍</div></div>
      </div>
      <div class="gallery-caption">
        <span class="gallery-cat-tag">Uploaded</span>
        <p>${photo.name}</p>
      </div>
    `;
    item.onclick = () => openLightbox(item);
    grid.appendChild(item);
  });
}

/* ── Lightbox ── */
let lightboxItems = [];
let lightboxIndex = 0;

function openLightbox(el) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  lightboxItems = Array.from(document.querySelectorAll('.gallery-item:not([style*="display: none"])'));
  lightboxIndex = lightboxItems.indexOf(el);
  
  renderLightbox(lightboxIndex);
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
  
  // Stop any playing video
  const imgWrap = document.getElementById('lightboxImgWrap');
  if (imgWrap) imgWrap.innerHTML = '';
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
  renderLightbox(lightboxIndex);
}

function renderLightbox(idx) {
  const item = lightboxItems[idx];
  const imgWrap = document.getElementById('lightboxImgWrap');
  const capEl = document.getElementById('lightboxCaption');
  if (!item || !imgWrap) return;

  const isVideo = item.getAttribute('data-video') === 'true';
  const imgEl = item.querySelector('img');
  const capP = item.querySelector('.gallery-caption p');
  const catTag = item.querySelector('.gallery-cat-tag');
  
  if (isVideo) {
    const videoSrc = item.getAttribute('data-src');
    if (videoSrc) {
      imgWrap.innerHTML = `
        <video controls autoplay class="lb-video">
          <source src="${videoSrc}" type="video/mp4">
          Your browser does not support the video tag.
        </video>`;
    } else {
      imgWrap.innerHTML = `
        <div class="lb-video-placeholder">
          <p>Video content up to 500MB</p>
          <span>(Place your .mp4 video file here)</span>
        </div>`;
    }
  } else if (imgEl) {
    imgWrap.innerHTML = `<img src="${imgEl.src}" alt="Gallery photo">`;
  } else {
    imgWrap.innerHTML = `<div class="lb-placeholder"><span>Add a real photo here</span></div>`;
  }

  const catText = catTag ? catTag.textContent : '';
  const capText = capP ? capP.textContent : '';
  capEl.innerHTML = `
    ${catText ? `<b style="color:var(--gold-light);">${catText}</b> &mdash; ` : ''}
    ${capText}
    <span style="color:rgba(255,255,255,0.3);font-size:0.78rem;margin-left:0.5rem;">${idx + 1} / ${lightboxItems.length}</span>
  `;
}

// Global listeners
document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('open')) return;
  if (e.key === 'ArrowRight') lightboxNav(1);
  if (e.key === 'ArrowLeft') lightboxNav(-1);
  if (e.key === 'Escape') closeLightbox();
});

/**
 * Handle browser back/forward buttons & initial load
 */
function handleRouting() {
  const pageId = window.location.hash.replace('#', '') || 'home';
  showPage(pageId);
}

window.addEventListener('hashchange', handleRouting);

/**
 * Toggle mobile hamburger menu
 */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

/**
 * Handle form submission
 * @param {Event} e - form submit event
 * @param {string} successId - ID of success message element
 * @param {string} type - 'admission' or 'contact'
 */
function submitForm(e, successId, type) {
  e.preventDefault();

  // Collect form data
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  
  // If it's a contact form, redirect to WhatsApp immediately
  if (type === 'contact') {
    const waPhone = '917845606488';
    const waText = `*New Message from IBC Website*\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Phone:* ${data.phone || 'N/A'}\n*Subject:* ${data.subject}\n*Message:* ${data.message}`;
    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
  }

  data.id = Date.now();
  data.timestamp = new Date().toISOString();
  data.status = 'New';

  // Save to localStorage (mock backend)
  const messages = JSON.parse(localStorage.getItem('ibc_messages') || '[]');
  messages.push(data);
  localStorage.setItem('ibc_messages', JSON.stringify(messages));

  const msg = document.getElementById(successId);
  if (msg) {
    msg.style.display = 'block';
    e.target.reset();
    setTimeout(() => { msg.style.display = 'none'; }, 6000);
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function (e) {
  const menu = document.getElementById('mobileMenu');
  const ham = document.querySelector('.hamburger');
  if (menu && ham && !menu.contains(e.target) && !ham.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// ── INITIALIZATION ──
document.addEventListener('DOMContentLoaded', () => {
  // Check for legacy URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const pageId = urlParams.get('page');

  if (pageId) {
    // Convert query param to hash and clean URL using replaceState
    // This avoids creating multiple entries in history
    const newHash = '#' + pageId;
    window.history.replaceState(null, '', window.location.pathname + newHash);
    handleRouting();
  } else if (!window.location.hash) {
    // Default to home without creating extra history entry
    window.history.replaceState(null, '', window.location.pathname + '#home');
    handleRouting();
  } else {
    // standard routing based on current hash
    handleRouting();
  }
});
