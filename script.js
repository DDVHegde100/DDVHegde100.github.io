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

var db = document.body;
    var c = document.getElementById('oldSkool');
    var $ = c.getContext('2d');
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    var resume;

    function relay() {
      window.requestAnimationFrame(relay);
      resume();
    }

    // Script Relay
    _s = db.querySelectorAll("script")[1].innerHTML.split("\n");
    x = 0;
    y = 1;
    c.width = w = window.innerWidth;
    c.height = h = _s.length * 20;
    db.style.margin = 0;
    db.style.background = "hsla(0,0%,0%,1)";
    db.style.overflow = "hidden";
    $.textBaseline = "top";
    $.font = "1.1em monospace";

    resume = function() {
      $.globalCompositeOperation = "source-over";
      $.shadowBlur = 0; $.fillStyle = "hsla(0,0%,0%,0.4)";
      $.fillRect(0,0,w,h);
      $.shadowColor = "hsla(120,100%,50%,0.5)";
      $.shadowBlur = 9; $.fillStyle = "hsla(120,100%,20%,1)";
      $.globalCompositeOperation = "lighter";
      _s.forEach(function(t, i) {
        if (i <= y) {
          if (i == y) { t = t.substr(0, x); }
          $.fillText(t, 100, 100+i*16);
        }
      });

      $.fillStyle = "hsla(120,100%,50%,1)";
      $.fillRect(100+$.measureText(_s[y].substr(0, x)).width, 102+y*16, 10, 14);
      x++;
      if (x >= _s[y].length) { y++; x = 0; }
      if (y*16 > innerHeight-200) { $.translate(0, -0.5); }
      if (y >= _s.length-1) { window.clearInterval(); }
    };

    relay();

const pdfThumbs = document.querySelectorAll('.pdf-thumb');
const pdfViewer = document.querySelector('.pdf-viewer');
const iframe = pdfViewer.querySelector('iframe');
const closeViewerButton = pdfViewer.querySelector('.close-viewer');

pdfThumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const pdfUrl = thumb.dataset.pdf;
    iframe.src = pdfUrl;
    pdfViewer.style.display = 'flex';
  });
});

// Close PDF viewer
closeViewerButton.addEventListener('click', () => {
  pdfViewer.style.display = 'none';
  iframe.src = ''; // Clear iframe to stop loading
});
