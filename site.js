const appearance = document.getElementById('theme');
appearance.value = document.documentElement.dataset.theme || 'system';
appearance.addEventListener('change', () => {
  const theme = appearance.value;
  if (theme === 'system') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = theme;
  try {
    if (theme === 'system') localStorage.removeItem('lumuna-theme');
    else localStorage.setItem('lumuna-theme', theme);
  } catch { /* The selected theme still works when browser storage is disabled. */ }
});
const titles = { support: 'Help & Support', privacy: 'Privacy Policy', terms: 'Terms of Use' };
function showPage({ focus = false } = {}) {
  const id = location.hash.slice(1);
  const page = Object.hasOwn(titles, id) ? id : '';
  document.title = page ? `${titles[page]} – Lumuna` : "Lumuna \u2014 Virtual Makeup Mirror for iPhone";
  document.querySelectorAll('header nav a').forEach(a => {
    if (a.hash === `#${id}`) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  if (page || !id || id === 'home') window.scrollTo({ top: 0, behavior: 'instant' });
  if (focus && (page || id === 'home' || id === 'explore')) {
    const target = document.querySelector(page ? `#${page} h1` : id === 'explore' ? '#explore-title' : '#hero-title');
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    if (id === 'explore') document.getElementById('explore').scrollIntoView({ behavior: 'instant', block: 'start' });
  }
}
addEventListener('hashchange', () => showPage({ focus: true }));
showPage();
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
