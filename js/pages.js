/* =============================================
   pages.js — All 6 Page Content
   ============================================= */

const PAGES = {
  home: `
  <!-- Verse Ticker -->
  <div class="verse-ticker">
    <strong>"He is the one we proclaim, admonishing and teaching everyone with all wisdom, so that we may present everyone fully mature in Christ. "</strong> — Colossians - 1 : 28
  </div>

  <!-- Hero Banner -->
  <div class="hero-banner-main">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfP92Rwlg3dZLcy_mJ5zDNDnOsGs8U6LGr_KCuuNkY7w19FYw/viewform?usp=header" target="_blank">
      <img src="js/image/img2.png" alt="Admission Open">
    </a>
  </div>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="bold-line">Equipping Servants</span>
        <span class="light-line">for the Nations</span>
      </h1>
      <p>
        India Bible College has been raising <strong>faithful ministers</strong>, missionaries, and Christian leaders for over 2 years. Rooted in Scripture. Grounded in faith.
      </p>
      <div class="hero-btns">
        <button class="btn-primary" onclick="window.location.hash = 'courses'">Explore Programmes</button>
        <button class="btn-outline" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSfP92Rwlg3dZLcy_mJ5zDNDnOsGs8U6LGr_KCuuNkY7w19FYw/viewform?usp=header', '_blank')">Apply for Admission</button>
      </div>
      <div class="hero-stats">
        <div class="stat-item"><h3> 42+</h3><p>Graduates Serving</p></div>
        <div class="stat-item"><h3>4</h3><p>Theological Programmes</p></div>
        <div class="stat-item"><h3>2+</h3><p>Years of Ministry</p></div>
        <div class="stat-item"><h3>2</h3><p>States Reached</p></div>
        <div class="stat-item"><h3>10</h3><p>Countries Reached</p></div>
      </div>
    </div>

    <!-- Hero image section removed per user request -->

    <!-- Scroll chevrons -->
    <div class="scroll-hint">
      <div class="chevron"></div>
      <div class="chevron"></div>
    </div>
  </section>

  <!-- Why IBC -->
  <section class="section section-alt">
    <div class="section-header">
      <div class="section-label">Why India Bible College</div>
      <h2 class="section-title">A Foundation Built on the Word</h2>
      <p class="section-subtitle">We are committed to forming Christ-centered leaders equipped with deep biblical knowledge, pastoral skills, and a heart for mission.</p>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">📖</div>
        <h3>Biblical Foundation</h3>
        <p>Every programme is deeply rooted in Scripture, ensuring graduates are grounded in the Word of God.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🙏</div>
        <h3>Spiritual Formation</h3>
        <p>Daily chapel, prayer meetings, and discipleship groups shape the spiritual character of every student.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🌏</div>
        <h3>Missions Focus</h3>
        <p>Strong emphasis on cross-cultural missions and church planting — reaching unreached peoples across India.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎓</div>
        <h3>Accredited Degrees</h3>
        <p>Programmes affiliated with Senate of Serampore College and recognised theological bodies across India.</p>
      </div>
    </div>
  </section>

  <!-- Programmes Preview -->
  <section class="section">
    <div class="section-header">
      <div class="section-label">Our Programmes</div>
      <h2 class="section-title">Theological Education for Every Calling</h2>
      <p class="section-subtitle">From certificate courses to postgraduate theology, we offer programmes for every stage of your ministry journey.</p>
    </div>
    <div class="courses-grid">

    <div class="course-card">
        <div class="course-banner c3">🌏</div>
        <div class="course-body">
          <div class="course-tag">Theology</div>
          <h3>Certificate in Theology</h3>
          <p>A foundational Six Months programme for lay leaders and those starting their ministry journey.</p>
          <p> 25 class each classes has One and half hours</p>
          <div class="course-meta"><span>⏱ 6 Months</span><span>📚 Residential</span><span>🎓 Certificate</span></div>
        </div>
      </div>

      <div class="course-card">
        <div class="course-banner c3">🌏</div>
        <div class="course-body">
          <div class="course-tag">Theology</div>
          <h3>Diploma in Theology</h3>
          <p>One-year, intensive programme focusing on biblical studies, ministry skills, and spiritual formation.</p>
          <p> 50 class each classes has One and half hours</p>
          <div class="course-meta"><span>⏱  2 Years</span><span>📚 Residential</span><span>🎓 Diploma</span></div>
        </div>
      </div>

      <div class="course-card">
        <div class="course-banner c1">📖</div>
        <div class="course-body">
          <div class="course-tag">Theology</div>
          <h3>Bachelor of Theology (B.Th.)</h3>
          <p>A comprehensive 3-year degree covering Old & New Testament, systematic theology, church history, and homiletics.</p>
          <p> 150 class, each classes One and half hours</p>
          <div class="course-meta"><span>⏱ 3 Years</span><span>📚 Residential</span><span>🎓 Degree</span></div>
        </div>
      </div>
      
    </div>
    <div style="text-align:center;margin-top:2.5rem;">
      <button class="btn-primary" onclick="window.location.hash = 'courses'">View All Programmes →</button>
    </div>
  </section>

  <div class="divider">✦ ✝ ✦</div>

  <!-- Testimonials -->
  <section class="section section-warm">
    <div class="section-header">
      <div class="section-label">Alumni Testimonies</div>
      <h2 class="section-title">Lives Transformed by Grace</h2>
    </div>
    <div class="testi-grid">
      <div class="testi-card">
        <div class="cross-small">✝ ✝ ✝</div>
        <p>IBC gave me not just theological knowledge, but a burning heart for lost souls By in Certificate in Theology. Now I'm a Sunday Class Teacher in Tambaram, Chennai Tamil Nadu — all glory to God.</p>
        <div class="testi-author">
          <div class="testi-avatar">S</div>
          <div><h5>Sis. Ranjani & Annal</h5><span> Teacher,  AJC Siluvairaja Ministry , TN</span></div>
        </div>
      </div>
      <div class="testi-card">
        <div class="cross-small">✝ ✝ ✝</div>
        <p>IBC didn’t just equip me with theological understanding—it ignited a deep passion in my heart for reaching the lost. Through the Certificate in Theology program, I was shaped, strengthened, and inspired for ministry. Today, I serve as a Sunday Class Teacher in Tambaram, Chennai, Tamil Nadu, and I give all the glory to God for His faithfulness in this journey..</p>
        <div class="testi-author">
          <div class="testi-avatar">M</div>
         <div><h5>Bro. Manikandan & Daniel .Y</h5><span> Teacher,  AJC Siluvairaja Ministry , TN</span></div>
        </div>
      </div>
      <div class="testi-card">
        <div class="cross-small">✝ ✝ ✝</div>
        <p>IBC didn’t just impart theological knowledge through the Certificate in Theology—it set my heart ablaze with a passion for the lost.
          Now I serve as a Good Reader in Tambaram, Chennai, Tamil Nadu, and I give all glory to God for His grace and calling..</p>
        <div class="testi-author">
          <div class="testi-avatar">J</div>
          <div><h5>Sis. Elizabeth </h5><span> Good leaner fo Bible,  AJC Siluvairaja Ministry , TN</span></div>
        </div>
      </div>
    </div>
  </section>
`,
  about: `
  <div class="page-hero">
    <h1>About India Bible College</h1>
    <p>"Faithful is he that calleth you, who also will do it." — 1 Thessalonians 5:24</p>
  </div>

  <section class="section section-alt">
    <div class="about-grid">
      <div class="about-visual">
        <div class="cross-bg">✝</div>
        <div class="founded">2024</div>
        <div class="tagline">"Raising up a generation of faithful ministers"</div>
        <div class="about-badges">
          <span class="about-badge">Affiliated with DTU, Texas, USA</span>
          <span class="about-badge">Accredited by NATA, India</span>
        </div>
      </div>
      <div class="about-text">
        <div class="section-label">Our Story</div>
        <h2 class="section-title">Serving the Nations</h2>
        <p>India Bible College was founded in 2024 with a visionary mission to train Christian workers across India. We believe that true theological education shapes not just the mind, but the whole person — intellect, character, and spirit.</p>
        <p>Our curriculum is designed to provide a rich environment for study, prayer, worship, and community life.</p>
        <ul class="values-list">
          <li>Unwavering commitment to the authority of Scripture</li>
          <li>Holistic formation: academic, spiritual, and practical</li>
          <li>Heart for the unreached and church planting</li>
          <li>Intercultural and pan-India vision for ministry</li>
          <li>Spirit-led community life and prayer culture</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-header">
      <div class="section-label">Our Faculty</div>
      <h2 class="section-title">Shepherds and Scholars</h2>
      <p class="section-subtitle">Our faculty are experienced pastors, theologians, and missionaries passionate about equipping the next generation.</p>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-image"><img src="js/image/pastor 1.jpeg" alt="Rev. V. Vincent"></div>
        <h3>Rev. V. Vincent </h3>
        <p><b>Founder & President.</b></p>
        <p>20 years in pastoral ministry.</p>
        <p>Tutor</p>
      </div>

      <div class="feature-card">
        <div class="feature-image"><img src="js/image/pastor2.jpeg" alt="J. Sbastin Rajasehar"></div>
        <h3>J. Sebastin Rajasehar</h3>
        <p>Bsc BED - M.DIV. Specialises in Ministry & Theology.</p>
        <p>Tutor</p>
      </div>

      <div class="feature-card">
        <div class="feature-image"><img src="js/image/lecturer 3.jpeg" alt="Patricia Pauline k"></div>
        <h3> Mrs. K. Patricia Pauline  </h3>
        <p>M.E.,</p>
        <p>Tutor</p>
      </div>

       <div class="feature-card">
        <div class="feature-image"><img src="js/image/lecturer4.jpeg" alt="John V"></div>
        <h3>Rev. John V  </h3>
        <p>Theology Teacher.,</p>
        <p>Tutor</p>
      </div>
     
    </div>
  </section>
`,
  courses: `
  <div class="page-hero">
    <h1>Our Programmes</h1>
    <p>Academic Excellence with Spiritual Maturity</p>
  </div>

  <section class="section">
    <div class="section-header">
      <div class="section-label">Academic Offerings</div>
      <h2 class="section-title">Raising Faithful Ministers</h2>
      <p class="section-subtitle">We offer a range of theological programmes designed to equip you for various ministry callings.</p>
    </div>
    <div class="courses-grid">
      
      <!-- C.Th -->
      <div class="course-card">
        <div class="course-banner c1">📖</div>
        <div class="course-body">
          <div class="course-tag">Theology</div>
          <h3>Certificate in Theology (C.Th)</h3>
          <p>A foundational 6 Months programme for lay leaders and those starting their ministry journey.</p>
          <p> 25 class each and classes has One and half hours</p>
          <div class="course-meta"><span>⏱ 6 Months</span><span>📚 Residential</span><span>🎓 Certificate</span></div>
          <button class="btn-primary" style="width:100%;margin-top:1.5rem;" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSfP92Rwlg3dZLcy_mJ5zDNDnOsGs8U6LGr_KCuuNkY7w19FYw/viewform?usp=header', '_blank')">Apply Now</button>
        </div>
      </div>

      <!-- D.Th -->
      <div class="course-card">
        <div class="course-banner c2">📜</div>
        <div class="course-body">
          <div class="course-tag">Theology</div>
          <h3>Diploma in Theology (D.Th)</h3>
          <p>One-year, intensive programme focusing on biblical studies, ministry skills .</p>
          <p> 50 class each and classes has One and half hours</p>>
          <div class="course-meta"><span>⏱ 1 Years</span><span>📚 Residential</span><span>🎓 Diploma</span></div>
          <button class="btn-primary" style="width:100%;margin-top:1.5rem;" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSfP92Rwlg3dZLcy_mJ5zDNDnOsGs8U6LGr_KCuuNkY7w19FYw/viewform?usp=header', '_blank')">Apply Now</button>
        </div>
      </div>

      <!-- B.Th -->
      <div class="course-card">
        <div class="course-banner c3">🌏</div>
        <div class="course-body">
          <div class="course-tag">Theology</div>
          <h3>Bachelor of Theology (B.Th)</h3>
          <p>Our flagship three-year undergraduate programme for aspiring pastors and missionaries.</p>
          <p>150 class and each classes has One and half hours</p>
          <div class="course-meta"><span>⏱ 3 Years</span><span>📚 Residential</span><span>🎓 Degree</span></div>
          <button class="btn-primary" style="width:100%;margin-top:1.5rem;" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSfP92Rwlg3dZLcy_mJ5zDNDnOsGs8U6LGr_KCuuNkY7w19FYw/viewform?usp=header', '_blank')">Apply Now</button>
        </div>
      </div>

      <!-- M.Div -->
      <div class="course-card">
        <div class="course-banner c1">✝</div>
        <div class="course-body">
          <div class="course-tag">Theology</div>
          <h3>Master of Divinity (M.Div)</h3>
          <p>Postgraduate level training for those with a prior degree seeking advanced theological education.</p>
          <p>100 class and each classes Two hours</p>
          <div class="course-meta"><span>⏱ 2 Years</span><span>📚 Residential</span><span>🎓 Masters</span></div>
          <button class="btn-primary" style="width:100%;margin-top:1.5rem;" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSfP92Rwlg3dZLcy_mJ5zDNDnOsGs8U6LGr_KCuuNkY7w19FYw/viewform?usp=header', '_blank')">Apply Now</button>
        </div>
      </div>

    </div>
  </section>
`,
  contact: `
  <div class="page-hero">
    <h1>Contact India Bible College</h1>
    <p>We are here to help and pray for you</p>
  </div>

  <section class="section">
    <div class="contact-grid">
      <div class="contact-info">
        <div class="section-label">Get in Touch</div>
        <h2 class="section-title">Reach Our Campus</h2>
        <p>Have questions about our programmes or need prayer? Feel free to contact our office or visit us.</p>
        
        <div class="contact-methods">
          <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div>
              <strong>Address</strong>
              <p>No. 173/2-B, Roja Thotta, Kadeshanagar,Irumbuliyur,Chennai, Tamil Nadu,India</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📞</div>
            <div>
              <strong>Phone / WhatsApp</strong>
              <p><a href="https://wa.me/917845606488" target="_blank" style="color: inherit; text-decoration: none;">+91 78456 06488</a></p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">✉️</div>
            <div>
              <strong>Email</strong>
              <p>indiabiblecollege2024@gmail.com</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">🕒</div>
            <div>
              <strong>Office Hours</strong>
              <p>Mon – Sat: 10:00 AM – 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-card">
        <h3 style="margin-bottom: 1.5rem; color: var(--maroon);">Send a Message</h3>
        <form onsubmit="submitForm(event, 'contactSuccess', 'contact')">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" name="name" required placeholder="Your Name">
          </div>
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" name="email" required placeholder="your@email.com">
          </div>
          <div class="form-grid">
            <div class="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="+91 00000 00000">
            </div>
            <div class="form-group">
              <label>Subject</label>
              <select name="subject" required>
                <option value="Admission Enquiry">Admission Enquiry</option>
                <option value="Prayer Request">Prayer Request</option>
                <option value="General Question">General Question</option>
                <option value="Visit Campus">Visit Campus</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea name="message" rows="5" required placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" class="btn-primary" style="width: 100%; margin-top: 1rem;">Send Message</button>
          <div class="success-msg" id="contactSuccess">🙏 Thank you! Your message has been received. We will reply soon. God bless you!</div>
        </form>
      </div>
    </div>
  </section>
`,
  gallery: `
  <div class="page-hero">
    <h1>Photo Gallery</h1>
    <p>&ldquo;To everything there is a season&hellip; a time to every purpose under the heaven.&rdquo; &mdash; Ecclesiastes 3:1</p>
  </div>

  <section class="section section-alt">

    <!-- Gallery Header -->
    <div class="gallery-header">
      <div class="section-label">Graduation Photos</div>
      <h2 class="section-title">All Last Class &mdash; Commissioning &amp; Graduation Ceremony</h2>
      <p class="section-subtitle">A blessed day of celebration as we commission our graduates to go forth and serve the Lord across India and the nations. &ldquo;Well done, good and faithful servant.&rdquo; &mdash; Matthew 25:21</p>

      <!-- Filter Tabs -->
      <div class="gallery-filters">
        <button class="filter-btn active" onclick="filterGallery('all', this)">All Photos</button>
        <button class="filter-btn" onclick="filterGallery('ceremony', this)">Ceremony</button>
        <button class="filter-btn" onclick="filterGallery('graduates', this)">Graduates</button>

      </div>
    </div>

    <!-- Gallery Grid -->
    <div class="gallery-grid" id="galleryGrid">

      <!-- 9 Image Placeholders -->
      <div class="gallery-item" data-category="ceremony" onclick="openLightbox(this)">
        <div class="gallery-img">
          <img class="gallery-img-real" src="js/image/1.jpeg" alt="Accreditation Certificate">
          <div class="gallery-overlay"></div>
        </div>
        <div class="gallery-caption">
          <span class="gallery-cat-tag">Accreditation</span>
          <p>NATA Accreditation Certificate - India Bible College</p>
        </div>
      </div>

      <div class="gallery-item" data-category="ceremony" onclick="openLightbox(this)">
        <div class="gallery-img">
          <img class="gallery-img-real" src="js/image/2.jpeg" alt="Affiliation Certificate">
          <div class="gallery-overlay"></div>
        </div>
        <div class="gallery-caption">
          <span class="gallery-cat-tag">Affiliation</span>
          <p>Dayspring Theological University Affiliation Certificate</p>
        </div>
      </div>

      <div class="gallery-item" data-category="ceremony" onclick="openLightbox(this)">
        <div class="gallery-img">
          <img class="gallery-img-real" src="js/image/3.jpeg" alt="Membership Certificate">
          <div class="gallery-overlay"></div>
        </div>
        <div class="gallery-caption">
          <span class="gallery-cat-tag">Membership</span>
          <p>NATA Membership Certificate - India Bible College</p>
        </div>
      </div>

      <div class="gallery-item" data-category="graduates" onclick="openLightbox(this)">
        <div class="gallery-img graduates2">
        <img class="gallery-img-real" src="js/image/WhatsApp Image 2026-04-09 at 3.47.19 PM.jpeg" alt="place">
          <div class="gallery-overlay"></div>
        </div>
        <div class="gallery-caption">
          <span class="gallery-cat-tag">Place of College</span>
          <p>Commissioning & Graduation Ceremony Photo 4</p>
        </div>
      </div>

      <div class="gallery-item" data-category="faculty" onclick="openLightbox(this)">
        <div class="gallery-img faculty">
         <img class="gallery-img-real" src="js/image/12.jpeg" alt="chairman">
          <div class="gallery-overlay"></div>
        </div>
        <div class="gallery-caption">
          <span class="gallery-cat-tag">1st Graduation</span>
          <p>Commissioning & Graduation Ceremony Photo 5</p>
        </div>
      </div>

      <div class="gallery-item" data-category="faculty" onclick="openLightbox(this)">
        <div class="gallery-img faculty">
         <img class="gallery-img-real" src="js/image/chairman.jpeg" alt="chairman">
          <div class="gallery-overlay"></div>
        </div>
        <div class="gallery-caption">
          <span class="gallery-cat-tag">1st Graduation</span>
          <p>Commissioning & Graduation Ceremony Photo 5</p>
        </div>
      </div>

      <div class="gallery-item" data-category="ceremony" onclick="openLightbox(this)">
        <div class="gallery-img ceremony-tall">
        <img class="gallery-img-real" src="js/image/13.jpeg" alt="graduation ceremony">
          <div class="gallery-overlay"></div>
        </div>
        <div class="gallery-caption">
          <span class="gallery-cat-tag">1st Graduation Ceremony</span>
          <p>Commissioning & Graduation Ceremony Photo </p>
        </div>
      </div>

      <div class="gallery-item" data-category="campus" onclick="openLightbox(this)">
        <div class="gallery-img campus">
         <img class="gallery-img-real" src="js/image/9.jpeg" alt="chairman">
          <div class="gallery-overlay"></div>
        </div>
        <div class="gallery-caption">
          <span class="gallery-cat-tag">2nd 
          Graduation Ceremony </span>
          <p>Commissioning & Graduation Ceremony Photo 7</p>
        </div>
      </div>

      <div class="gallery-item" data-category="graduates" onclick="openLightbox(this)">
        <div class="gallery-img graduates3">
         <img class="gallery-img-real" src="js/image/7.jpeg" alt="chairman">
          <div class="gallery-overlay"></div>
        </div>
        <div class="gallery-caption">
       
          <span class="gallery-cat-tag">3nd Graduation Ceremony</span>
          <p>Commissioning & Graduation Ceremony Photo 8</p>
        </div>
      </div>

      <div class="gallery-item" data-category="campus" onclick="openLightbox(this)">
        <div class="gallery-img campus2">
         <img class="gallery-img-real" src="js/image/14.jpeg" alt="chairman">
          <div class="gallery-overlay"></div>
        </div>
        <div class="gallery-caption">
          <span class="gallery-cat-tag">Image 9</span>
          <p>Commissioning & Graduation Ceremony Photo 9</p>
        </div>
      </div>

      <!-- 2 Video Placeholders -->
      <div class="gallery-item" data-category="ceremony" onclick="openLightbox(this)" data-video="true" data-src="js/vedios/vedio1.mp4">
        <div class="gallery-img ceremony">
          <div class="gallery-overlay"></div>
        </div>
        <div class="gallery-caption">
          <span class="gallery-cat-tag">Video 1</span>
          <p>Graduation Ceremony Highlights Video 1</p>
        </div>
      </div>

      <div class="gallery-item" data-category="ceremony" onclick="openLightbox(this)" data-video="true" data-src="js/vedios/vedio2.mp4">
        <div class="gallery-img ceremony">
          <div class="gallery-overlay"></div>
        </div>
        <div class="gallery-caption">
          <span class="gallery-cat-tag">Video 2</span>
          <p>Graduation Ceremony Highlights Video 2</p>
        </div>
      </div>


    </div><!-- /gallery-grid -->

  </section>

  <!-- Lightbox Modal -->
  <div class="lightbox" id="lightbox" onclick="closeLightbox()">
    <div class="lightbox-inner" onclick="event.stopPropagation()">
      <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
      <button class="lightbox-prev" onclick="lightboxNav(-1)">&#8249;</button>
      <button class="lightbox-next" onclick="lightboxNav(1)">&#8250;</button>
      <div class="lightbox-img-wrap" id="lightboxImgWrap">
        <!-- image or placeholder shown here -->
      </div>
      <div class="lightbox-caption" id="lightboxCaption"></div>
    </div>
  </div>
`
};
