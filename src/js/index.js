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
      mySwiper.destroy;
    }
  }
}

mobileSlider();
window.addEventListener('resize', () => {
    mobileSlider();
});

document.querySelector('.sidebar-logo__burger').addEventListener('click', function (evnt) {
  evnt.preventDefault();
  document.querySelector('.sidebar').classList.add('sidebar--active');
  document.querySelector('.burger-menu').classList.add('burger-menu--active');
});


document.querySelector('.burger-logo__item').addEventListener('click', function (evnt) {
  evnt.preventDefault();
  document.querySelector('.sidebar').classList.remove('sidebar--active');
  document.querySelector('.burger-menu').classList.remove('burger-menu--active');
});

document.querySelector('.burger-menu__overlay').addEventListener('click', function (evnt) {
  evnt.preventDefault();
  document.querySelector('.sidebar').classList.remove('sidebar--active');
  document.querySelector('.burger-menu').classList.remove('burger-menu--active');
});
