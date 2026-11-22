(() => {
  document.documentElement.classList.add('js');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  const progressBar = document.getElementById('progressBar');
  const toast = document.getElementById('toast');
  let toastTimer;

  function closeMenu() {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Buka navigasi');
  }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Tutup navigasi' : 'Buka navigasi');
    nav.classList.toggle('is-open', open);
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (nav.classList.contains('is-open') && !nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });

  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const active = nav.querySelector(`a[href="#${entry.target.id}"]`);
          navLinks.forEach(link => link.removeAttribute('aria-current'));
          if (active) active.setAttribute('aria-current', 'location');
        }
      });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }
  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${max > 0 ? Math.min(100, window.scrollY / max * 100) : 0}%`;
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  const materialContent = {
    dimensions: { number: '01', title: 'Ukuran & ruang gerak', text: 'Lebar, tinggi, kedalaman, akses masuk, serta ruang gerak di sekitarnya menjadi titik awal perancangan.' },
    specification: { number: '02', title: 'Material & hardware', text: 'Jenis papan atau kayu, mekanisme, engsel, handle, dan detail finishing memengaruhi karakter serta kebutuhan perawatan.' },
    execution: { number: '03', title: 'Lokasi & kompleksitas', text: 'Kondisi dinding dan lantai, akses pengiriman, instalasi, serta detail custom ikut membentuk rencana pengerjaan.' }
  };
  document.querySelectorAll('.material-tab').forEach(button => button.addEventListener('click', () => {
    const content = materialContent[button.dataset.material];
    document.querySelectorAll('.material-tab').forEach(tab => {
      const selected = tab === button;
      tab.classList.toggle('is-active', selected);
      tab.setAttribute('aria-pressed', String(selected));
    });
    document.getElementById('materialNumber').textContent = content.number;
    document.getElementById('materialTitle').textContent = content.title;
    document.getElementById('materialText').textContent = content.text;
  }));

  document.querySelectorAll('[data-category]').forEach(link => link.addEventListener('click', () => {
    const category = document.getElementById('category');
    category.value = link.dataset.category;
    updateFormProgress();
    category.dispatchEvent(new Event('change', { bubbles: true }));
  }));

  const form = document.getElementById('briefForm');
  const category = document.getElementById('category');
  const city = document.getElementById('city');
  const size = document.getElementById('size');
  const notes = document.getElementById('notes');
  const timeline = document.getElementById('timeline');
  const previewTitle = document.getElementById('previewTitle');
  const previewText = document.getElementById('previewText');
  const previewSummary = document.getElementById('previewSummary');
  const copyButton = document.getElementById('copyBrief');
  const formStatus = document.getElementById('formStatus');
  const formProgress = document.getElementById('formProgress');
  let briefText = '';

  function updateFormProgress() {
    const completed = [category.value, city.value.trim(), size.value.trim(), notes.value.trim()].filter(Boolean).length;
    formProgress.textContent = `${String(Math.max(1, completed)).padStart(2, '0')} / 04`;
  }
  [category, city, size, notes, timeline].forEach(field => {
    field.addEventListener('input', () => { field.classList.toggle('has-value', Boolean(field.value.trim())); updateFormProgress(); });
    field.addEventListener('change', () => { field.classList.toggle('has-value', Boolean(field.value.trim())); updateFormProgress(); });
    field.addEventListener('blur', () => field.classList.add('was-touched'));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const lines = [
      'NARA OBJECTS — SPACE BRIEF (LOCAL DEMO)',
      `Kebutuhan: ${category.value}`,
      `Area: ${city.value.trim()}`,
      `Ukuran perkiraan: ${size.value.trim() || 'Belum ditentukan'}`,
      `Kebutuhan ruang: ${notes.value.trim() || 'Belum diisi'}`,
      `Target waktu: ${timeline.value || 'Belum ditentukan'}`,
      '',
      'Catatan: Ringkasan ini dibuat secara lokal. Tidak dikirim atau disimpan.'
    ];
    briefText = lines.join('\n');
    previewTitle.textContent = 'Brief awalmu sudah tersusun.';
    previewText.textContent = 'Periksa kembali ringkasan berikut. Kamu dapat menyalinnya untuk digunakan sendiri—belum ada inquiry yang dikirim.';
    previewSummary.hidden = false;
    previewSummary.textContent = briefText;
    copyButton.disabled = false;
    formStatus.textContent = 'Ringkasan dibuat di browser ini. Tidak ada data yang dikirim atau disimpan.';
    previewSummary.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
  });
  copyButton.addEventListener('click', async () => {
    if (!briefText) return;
    try {
      await navigator.clipboard.writeText(briefText);
      showToast('Ringkasan brief disalin ke clipboard.');
    } catch {
      const area = document.createElement('textarea');
      area.value = briefText;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed'; area.style.opacity = '0';
      document.body.appendChild(area); area.select();
      const copied = document.execCommand('copy'); area.remove();
      showToast(copied ? 'Ringkasan brief disalin ke clipboard.' : 'Clipboard tidak tersedia. Pilih dan salin ringkasan secara manual.');
    }
  });
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
  }


  // Calm, consistent reveal: short travel, soft easing, small stagger per group.
  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const groups = new Map();
    revealItems.forEach(item => {
      const parent = item.parentElement;
      const index = groups.get(parent) || 0;
      groups.set(parent, index + 1);
      item.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 75}ms`);
    });
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Distinct material imagery follows the active material control.
  const materialImages = {
    dimensions: { src: 'assets/credenza.webp', alt: 'Visual konsep AI credenza walnut; bukan proyek nyata NARA', label: '01 / DIMENSI' },
    specification: { src: 'assets/joinery-detail.webp', alt: 'Visual konsep AI detail tekstur dan sambungan kayu; bukan dokumentasi produksi', label: '02 / SPESIFIKASI' },
    execution: { src: 'assets/pantry.webp', alt: 'Visual konsep AI pantry cabinetry kayu; bukan proyek nyata NARA', label: '03 / PELAKSANAAN' }
  };
  const materialImage = document.getElementById('materialImage');
  const materialVisual = document.querySelector('.material-visual');
  document.querySelectorAll('.material-tab').forEach(button => button.addEventListener('click', () => {
    const image = materialImages[button.dataset.material];
    if (!image || !materialImage || !materialVisual) return;
    materialVisual.classList.add('is-changing');
    const preload = new Image();
    preload.onload = () => {
      materialImage.src = image.src;
      materialImage.alt = image.alt;
      document.getElementById('materialImageLabel').textContent = image.label;
      requestAnimationFrame(() => materialVisual.classList.remove('is-changing'));
    };
    preload.onerror = () => materialVisual.classList.remove('is-changing');
    preload.src = image.src;
  }));

  // Material tabs support arrow-key navigation as well as pointer/touch.
  const materialTabs = [...document.querySelectorAll('.material-tab')];
  materialTabs.forEach((tab, index) => tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? materialTabs.length - 1 :
      (index + (event.key === 'ArrowRight' ? 1 : -1) + materialTabs.length) % materialTabs.length;
    materialTabs[next].focus();
    materialTabs[next].click();
  }));

  // Keep the FAQ concise: one answer expanded at a time.
  const faqItems = [...document.querySelectorAll('.faq-list details')];
  faqItems.forEach(item => item.addEventListener('toggle', () => {
    const summary = item.querySelector('summary');
    if (summary) summary.setAttribute('aria-expanded', String(item.open));
    if (item.open) faqItems.forEach(other => { if (other !== item) other.open = false; });
  }));



})();
