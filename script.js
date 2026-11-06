const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Открыть меню');
  siteNav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Открыть меню' : 'Закрыть меню');
  siteNav.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

document.addEventListener('click', (event) => {
  if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) closeMenu();
});

document.querySelector('#year').textContent = new Date().getFullYear();

const workflow = document.querySelector('.workflow');

if (workflow && 'IntersectionObserver' in window) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let workflowIsVisible = false;

  function updateWorkflowAnimation() {
    workflow.classList.toggle(
      'is-animating',
      workflowIsVisible && !document.hidden && !reducedMotion.matches
    );
  }

  const workflowObserver = new IntersectionObserver(([entry]) => {
    workflowIsVisible = entry.isIntersecting && entry.intersectionRatio >= .35;
    updateWorkflowAnimation();
  }, { threshold: .35 });

  workflowObserver.observe(workflow);
  document.addEventListener('visibilitychange', updateWorkflowAnimation);
  reducedMotion.addEventListener('change', updateWorkflowAnimation);
}

const demoTrigger = document.querySelector('.lead-demo-trigger');
const demoDialog = document.querySelector('#lead-demo-dialog');
const demoVideo = demoDialog.querySelector('video');
const demoStatus = demoDialog.querySelector('.demo-status');
const demoAttachmentId = '66f44f74-8a7d-4aea-ae04-6d8efa9541a6';
let demoSource = null;
let demoSourceTime = 0;
let demoLoadId = 0;

function setDemoStatus(message) {
  demoStatus.textContent = message;
  demoStatus.hidden = !message;
}

async function getDemoSource() {
  if (demoSource && Date.now() - demoSourceTime < 120000) return demoSource;

  // GitHub signs attachment URLs for a few minutes. Resolve a fresh URL from
  // the public README instead of committing an expiring token or using an iframe.
  const response = await fetch('https://api.github.com/repos/AlexZaytsev-ai/Lead-intake-handoff/readme?ref=main', {
    headers: { Accept: 'application/vnd.github.html+json' },
    cache: 'no-store',
    signal: AbortSignal.timeout(15000)
  });
  if (!response.ok) throw new Error('Demo source unavailable');
  const readme = new DOMParser().parseFromString(await response.text(), 'text/html');
  const video = Array.from(readme.querySelectorAll('video')).find((item) => item.src.includes(demoAttachmentId));
  if (!video) throw new Error('Demo attachment not found');
  const source = new URL(video.src);
  if (source.protocol !== 'https:' || !['private-user-images.githubusercontent.com', 'github.com'].includes(source.hostname)) {
    throw new Error('Unexpected demo host');
  }
  demoSource = source.href;
  demoSourceTime = Date.now();
  return demoSource;
}

demoTrigger.addEventListener('click', async () => {
  if (demoDialog.open) return;
  const loadId = ++demoLoadId;
  demoDialog.showModal();
  document.body.classList.add('demo-open');
  setDemoStatus('Загружаю видео…');
  try {
    const source = await getDemoSource();
    if (!demoDialog.open || loadId !== demoLoadId) return;
    demoVideo.src = source;
    demoVideo.load();
  } catch {
    if (demoDialog.open && loadId === demoLoadId) {
      setDemoStatus('Не удалось загрузить видео. Откройте демо на GitHub по ссылке ниже.');
    }
  }
});

demoVideo.addEventListener('loadeddata', () => setDemoStatus(''));
demoVideo.addEventListener('error', () => {
  if (demoDialog.open && demoVideo.hasAttribute('src')) {
    demoSource = null;
    setDemoStatus('Не удалось загрузить видео. Откройте демо на GitHub по ссылке ниже.');
  }
});
function resetDemo() {
  ++demoLoadId;
  demoVideo.pause();
  demoVideo.removeAttribute('src');
  demoVideo.load();
  setDemoStatus('');
  document.body.classList.remove('demo-open');
}

function closeDemo() {
  resetDemo();
  demoDialog.close();
  demoTrigger.focus({ preventScroll: true });
}

demoDialog.querySelector('.demo-close').addEventListener('click', closeDemo);
demoDialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeDemo();
});
demoDialog.addEventListener('click', (event) => {
  const rect = demoDialog.getBoundingClientRect();
  if (event.target === demoDialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) {
    closeDemo();
  }
});
demoDialog.addEventListener('close', () => {
  // A queued close event must not interrupt a dialog that was reopened quickly.
  if (!demoDialog.open) {
    resetDemo();
    demoTrigger.focus({ preventScroll: true });
  }
});
