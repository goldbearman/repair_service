import '../scss/style.scss';

import Swiper,{ Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

export const slider = document.querySelector('.swiper-container');
export let mySwiper;

export function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper('.swiper-container', {
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      keyboard: {
        //Включаем упрвление калвиатурой
        enabled: true,
        //Только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
      },
      mousewheel: {
        sensitivity: 1,
      },
      grabCursor: true,
      slideToClickedSlide: true,
      slidesPerView: 'auto',
    });
    slider.dataset.mobile = 'true';
  }
  if (window.innerWidth > 768) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();
window.addEventListener('resize', () => {
    mobileSlider();
});

console.log('Works!');
