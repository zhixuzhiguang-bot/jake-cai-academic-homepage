document.getElementById('year').textContent = new Date().getFullYear();
const links = [...document.querySelectorAll('.nav a')];
function updateNavigation() {
  const current = location.hash || '#welcome';
  links.forEach(link => {
    if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
addEventListener('hashchange', updateNavigation);
updateNavigation();
