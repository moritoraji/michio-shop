export function currentScroll() {

  window.addEventListener('scroll', function () {
    const idTop = document.getElementById('top');
    const idSecond = document.getElementById('second');
    const idThird = document.getElementById('third');
    const idLast = document.getElementById('last');

    const topTop = idTop.getBoundingClientRect().top + window.pageYOffset;
    const topSecond = idSecond.getBoundingClientRect().top + window.pageYOffset;
    const topThird = idThird.getBoundingClientRect().top + window.pageYOffset;
    const topLast = idLast.getBoundingClientRect().top + window.pageYOffset;

    const currentTop = document.getElementById('js-top_current');
    const currentSecond = document.getElementById('js-second_current');
    const currentThird = document.getElementById('js-third_current');

    const windowTop = window.pageYOffset + 50;

    if (topTop < windowTop && windowTop <= topSecond) {
      currentTop.classList.add('is-current');
      currentTop.nextElementSibling.classList.remove('is-current');
    } else if (topSecond < windowTop && windowTop <= topThird) {
      currentSecond.classList.add('is-current');
      currentSecond.previousElementSibling.classList.remove('is-current');
      currentSecond.nextElementSibling.classList.remove('is-current');
    } else if (topThird < windowTop && windowTop <= topLast) {
      currentThird.classList.add('is-current');
      currentThird.previousElementSibling.classList.remove('is-current');
      currentThird.nextElementSibling.classList.remove('is-current');
    }
  });
}
