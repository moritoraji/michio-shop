export function fvanimation() {
  const loading = document.querySelector('.p-top__fv__loading');
  const loadingImg = document.querySelector('.p-top__fv__image');
  const loadingSlide01 = document.querySelector('.p-top__fv__slide_01');
  const loadingSlide02 = document.querySelector('.p-top__fv__slide_02');
  const loadingSub = document.querySelector('.p-top__fv__sub');
  const loadingScroll = document.querySelector('.p-top__fv__link');

  window.addEventListener('load', () => {
    setTimeout(function () {
    loading.classList.add('hide');

      setTimeout(function () {
        loadingImg.classList.add('visible');

        setTimeout(function () {
          loadingSlide01.classList.add('fade-in');
          loadingSlide02.classList.add('fade-in');

          setTimeout(function () {
            loadingSub.classList.add('visible');
            loadingScroll.classList.add('visible');
          }, 1000);
        }, 500);
      }, 700);
    }, 500);

  }, false );

}