import '../scss/style.scss';

import Swiper, {Navigation, Pagination} from 'swiper';

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

//------------------- Боковые меню -----------------------------------


openMenu('.sidebar-logo__burger', '.sidebar');
openMenu('.contact-icons__call', '.modal-call');
openMenu('.contact-icons__chat', '.modal-feedback');
openMenu('.contact__chat', '.modal-feedback');
openMenu('.contact__call', '.modal-call');

closeMenu('.burger-logo__item', '.sidebar');
closeMenu('.modal-feedback__button', '.modal-feedback');
closeMenu('.modal-call__button', '.modal-call');


document.querySelector('.burger-menu__overlay').addEventListener('click', function (evnt) {
  evnt.preventDefault();
  document.querySelector('.sidebar').classList.remove('sidebar--active');
  document.querySelector('.burger-menu').classList.remove('burger-menu--active');
  document.querySelector('.modal-feedback').classList.remove('modal-feedback--active');
  document.querySelector('.modal-call').classList.remove('modal-call--active');
  document.querySelector('body').classList.remove('body--active');
});

function openMenu(selectorButton, selectorMenu) {
  let selectorMenuActive = selectorMenu.trim() + '--active';
  selectorMenuActive = selectorMenuActive.slice(1);
  document.querySelector(selectorButton).addEventListener('click', function (evnt) {
    evnt.preventDefault();
    document.querySelector(selectorMenu).classList.add(selectorMenuActive);
    document.querySelector('.burger-menu').classList.add('burger-menu--active');
    document.querySelector('body').classList.add('body--active');
  })
}

function closeMenu(selectorButton, selectorMenu) {
  let selectorMenuActive = selectorMenu.trim() + '--active';
  selectorMenuActive = selectorMenuActive.slice(1);
  document.querySelector(selectorButton).addEventListener('click', function (evnt) {
    evnt.preventDefault();
    document.querySelector(selectorMenu).classList.remove(selectorMenuActive);
    document.querySelector('.burger-menu').classList.remove('burger-menu--active');
    document.querySelector('body').classList.remove('body--active');
  })
}


