// Saathi Safety Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-drawer .nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target) && mobileDrawer.classList.contains('active')) {
        mobileDrawer.classList.remove('active');
      }
    });
  }

  // Waitlist Form Functionality
  const waitlistForm = document.getElementById('waitlistForm');
  const waitlistEmail = document.getElementById('waitlistEmail');
  const formFeedback = document.getElementById('formFeedback');
  const successModal = document.getElementById('successModal');
  const modalClose = document.getElementById('modalClose');
  const modalBtn = document.getElementById('modalBtn');
  const userEmailDisplay = document.getElementById('userEmailDisplay');
  const queueNumberDisplay = document.getElementById('queueNumberDisplay');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  if (waitlistForm && waitlistEmail) {
    waitlistForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = waitlistEmail.value.trim();

      if (!email) {
        showFeedback('Please enter an email address.', 'error');
        waitlistEmail.focus();
        return;
      }

      if (!validateEmail(email)) {
        showFeedback('Please enter a valid email address.', 'error');
        waitlistEmail.focus();
        return;
      }

      // Save to localStorage
      try {
        const savedList = JSON.parse(localStorage.getItem('saathi_waitlist') || '[]');
        if (!savedList.includes(email)) {
          savedList.push(email);
          localStorage.setItem('saathi_waitlist', JSON.stringify(savedList));
        }
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      // Calculate queue number
      const queueNumber = 247 + Math.floor(Math.random() * 50);

      // Trigger Confetti effect
      triggerConfetti();

      // Show modal
      if (userEmailDisplay) userEmailDisplay.textContent = email;
      if (queueNumberDisplay) queueNumberDisplay.textContent = `#${queueNumber}`;
      if (successModal) successModal.classList.add('active');

      showFeedback('✓ You have been added to the waitlist!', 'success');
      waitlistEmail.value = '';
    });
  }

  function showFeedback(msg, type) {
    if (!formFeedback) return;
    formFeedback.textContent = msg;
    formFeedback.className = `form-feedback ${type}`;
    if (type === 'error') {
      setTimeout(() => {
        formFeedback.textContent = '';
        formFeedback.className = 'form-feedback';
      }, 4000);
    }
  }

  // Modal Close Handlers
  function closeModal() {
    if (successModal) successModal.classList.remove('active');
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBtn) modalBtn.addEventListener('click', closeModal);
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) closeModal();
    });
  }

  // FAQ Accordion
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      accordionItems.forEach(other => {
        other.classList.remove('active');
        const otherBody = other.querySelector('.accordion-body');
        if (otherBody) otherBody.style.maxHeight = null;
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Interactive Layer Inspector
  const layerItems = document.querySelectorAll('.layer-item');
  const prototypeImg = document.getElementById('prototypeImg');

  layerItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      layerItems.forEach(l => l.classList.remove('active'));
      item.classList.add('active');
      if (prototypeImg) {
        prototypeImg.style.transform = 'scale(1.04) translateY(-8px)';
      }
    });

    item.addEventListener('mouseleave', () => {
      if (prototypeImg) {
        prototypeImg.style.transform = '';
      }
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const contactFeedback = document.getElementById('contactFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (contactFeedback) {
        contactFeedback.innerHTML = '<span style="color: #34d399;">✓ Thank you for reaching out! Our team will respond shortly.</span>';
        contactForm.reset();
        setTimeout(() => {
          contactFeedback.innerHTML = '';
        }, 5000);
      }
    });
  }

  // Canvas Confetti
  function triggerConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#ffffff', '#e5e7eb', '#d1d5db', '#9ca3af', '#f3f4f6'];

    for (let i = 0; i < 75; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        w: Math.random() * 8 + 4,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16 - 5,
        gravity: 0.35,
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 10,
        alpha: 1
      });
    }

    let animationFrame;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rSpeed;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();
        }
      });

      if (alive) {
        animationFrame = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrame);
        canvas.remove();
      }
  // Jump to closing if requested
  if (window.location.hash === '#closing' || window.location.search.includes('page=closing')) {
    const closingEl = document.getElementById('closing');
    if (closingEl) {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, closingEl.offsetTop);
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 500);
    }
  }
});
