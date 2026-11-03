const appSelector = document.querySelector('.app-selector');
if (appSelector) {
  document.addEventListener('click', event => {
    if (!appSelector.contains(event.target)) appSelector.open = false;
  });
  appSelector.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      appSelector.open = false;
      appSelector.querySelector('summary').focus();
    }
  });
  appSelector.addEventListener('focusout', event => {
    if (event.relatedTarget && !appSelector.contains(event.relatedTarget)) appSelector.open = false;
  });
}
