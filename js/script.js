const modal = new GraphModal();


const btnMore = document.querySelector('.podcasts__button-btn');

const podcastsItem = document.querySelectorAll('.podcasts__item');

btnMore.addEventListener('click', () => {

  podcastsItem.forEach(el => { el.classList.add('podcasts__item--visible') });

  btnMore.closest('.podcasts__button').classList.add('podcasts__button--hidden');

});



const element = document.querySelector('select');

const choices = new Choices(element, {

  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,

});



document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {

  tabsBtn.addEventListener('click', function (e) {

    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {

      btn.classList.remove('tabs-nav__btn--active');

    });

    e.currentTarget.classList.add('tabs-nav__btn--active');

    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {

      tabsBtn.classList.remove('tabs-item--active');

    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');

  });

});



$(".accordion-list").accordion({

  heightStyle: "content",
  active: true,
  collapsible: true,
  icons: false

});



$('.accordion').accordion({

  active: 0

});



var swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,

  navigation: {

    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

  },

});

if (window.matchMedia('screen and (max-width: 1200px)').matches) {

  var swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,

  });

};

if (window.matchMedia('screen and (max-width: 570px)').matches) {

  var swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 15,

  });

};



new JustValidate('.about__form', {

  colorWrong: 'var(--color-error_color)',

  rules: {

    name: {

      required: true,
      minLength: 2,
      maxLength: 35

    },

    mail: {

      required: true,
      email: true

    },

  },

  messages: {

    name: {

      required: 'Не верно введено Имя',
      minLength: 'Не верно введено Имя',
      maxLength: 'Не верно введено Имя'

    },

    mail: {

      required: 'Не верно введён E-mail',
      email: 'Не верно введён E-mail'

    },

  },

});