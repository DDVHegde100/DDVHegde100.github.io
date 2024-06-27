function getRandomArbitrary(min, max) {
  return Math.random() * (min - max) + max;
}

// Super simple router - go to page specified in hash, otherwise go to "default"
function router(route) {
  const pageName = route ? route : document.querySelector('.default.page').getAttribute('data-page-name');
  const page = document.querySelector(`[data-page-name="${pageName}"]`);
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.querySelectorAll('[data-page]').forEach(p => p.classList.remove('active'));
  document.querySelector(`[data-page="${pageName}"]`).classList.add('active');
  page.style.display = 'block';
}
router();

// Fake loader
let progress = 0;
const fakeLoaderInterval = window.setInterval(function() {
  const loadingProgress = document.querySelector('.loading-progress');
  progress += getRandomArbitrary(10, 25);
  loadingProgress.style.transform = `translateX(${progress}%)`;

  if (progress >= 75) {
    window.clearInterval(fakeLoaderInterval);
    loadingProgress.style.transform = 'translateX(100%)';
    setTimeout(() => document.querySelector('.loading').style.transform = 'translateY(calc(100% + 10px))', 400);
  }
}, getRandomArbitrary(100, 500));

// Navigation
document.querySelectorAll('.main-nav li button').forEach(navItem => {
  navItem.addEventListener('click', e => {
    e.preventDefault();
    const route = e.currentTarget.getAttribute('data-page');
    document.querySelectorAll('.main-nav li button').forEach(navItem => navItem.classList.remove('active'));
    e.currentTarget.classList.add('active');
    router(route);
  });
});
