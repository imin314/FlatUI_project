document.documentElement.style.visibility = 'hidden';

const showDocument = function unhideHTMLContent() {
  document.documentElement.style.visibility = '';
};

window.addEventListener('load', showDocument);
