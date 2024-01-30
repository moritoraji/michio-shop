import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css';

export function swiper() {

  const swiper = new Swiper(".swiper", {
    modules: [Autoplay, EffectFade],
    loop: true,
    speed: 7000,
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 16,
      }
    }
  });

}