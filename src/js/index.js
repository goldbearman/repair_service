import '../scss/style.scss';

import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

const slider = document.querySelector('.swiper-container');
let mySwiper;

function mobileSlider() {

  'use strict';

  if (window.innerWidth < 768 && slider.dataset.mobile === 'false' && mySwiper === undefined) {
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
      freeMode: true,
      grabCursor: true,
      slideToClickedSlide: true,
      slidesPerView: 'auto',
    });
    slider.dataset.mobile = 'true';
    slider.dataset.mobile = 'true';
  } else if (window.innerWidth > 768 && mySwiper !== undefined) {
    slider.dataset.mobile = 'false';
    for (let i = 0; i < mySwiper.length; i++) {
      mySwiper[i].destroy();
    }
    mySwiper = undefined;
  }
}

mobileSlider();
window.addEventListener('resize', () => {
  mobileSlider();
});

//------------------- Боковые меню -----------------------------------


openMenu('.sidebar-logo__burger', '.sidebar-container');
openMenu('.contact-icons__call', '.modal-call-container');
openMenu('.contact-icons__chat', '.modal-feedback-container');
openMenu('.contact__chat', '.modal-feedback-container');
openMenu('.contact__call', '.modal-call-container');

closeMenu('.burger-logo__item', '.sidebar-container');
closeMenu('.sidebar-container__overlay', '.sidebar-container');

closeMenu('.modal-feedback__button', '.modal-feedback-container');
closeMenu('.modal-feedback-container__overlay', '.modal-feedback-container');

closeMenu('.modal-call__button', '.modal-call-container');
closeMenu('.modal-call-container__overlay', '.modal-call-container');

function openMenu(selectorButton, selectorMenu) {
  let selectorMenuActive = selectorMenu.trim() + '-active';
  selectorMenuActive = selectorMenuActive.slice(1);
  document.querySelector(selectorButton).addEventListener('click', function (evnt) {
    evnt.preventDefault();
    document.querySelector(selectorMenu).classList.add(selectorMenuActive);
    document.querySelector('body').classList.add('body-active');
  })
}

function closeMenu(selectorButton, selectorMenu) {
  let selectorMenuActive = selectorMenu.trim() + '-active';
  selectorMenuActive = selectorMenuActive.slice(1);
  document.querySelector(selectorButton).addEventListener('click', function (evnt) {
    evnt.preventDefault();
    document.querySelector(selectorMenu).classList.remove(selectorMenuActive);
    document.querySelector('body').classList.remove('body-active');
  })
}


