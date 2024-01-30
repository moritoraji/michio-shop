export function smooth() {
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const width = window.outerWidth;
      const target = (rect) + offset - (0);
      const targetSp = (rect) + offset - (0);

      if (width <= 768) {
        window.scrollTo({
          top: targetSp,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: target,
          behavior: 'smooth',
        });
      }
    });
  }
}
