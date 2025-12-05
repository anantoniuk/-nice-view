const swiper = new Swiper('.swiper', {
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: ['-80%', 0, 0],
      scale: 0.5,
    },
    next: {
      translate: ['80%', 0, 0],
      scale: 0.5,
    },
  },

  loop: true,
  slidesPerView: 3,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    320: {
      navigation: {
        nextEl: '',
        prevEl: '',
      },
      slidesPerView: 1.5,
      creativeEffect: {
        prev: {
          translate: ['-50%', 0, 0],
          scale: 0.7,
        },
        next: {
          translate: ['50%', 0, 0],
          scale: 0.7,
        },
      },
    },
    768: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1.5,
      creativeEffect: {
        prev: {
          translate: ['-80%', 0, 0],
          scale: 0.5,
        },
        next: {
          translate: ['80%', 0, 0],
          scale: 0.5,
        },
      },
    },
    1200: {
      slidesPerView: 1.5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      creativeEffect: {
        prev: {
          translate: ['-80%', 0, 0],
          scale: 0.5,
        },
        next: {
          translate: ['80%', 0, 0],
          scale: 0.5,
        },
      },
    },
  },
});
