const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    576: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    // // when window width is >= 480px
    992: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 1.3,
      spaceBetween: 35,
    },
    1400: {
      slidesPerView: 1.5,
      spaceBetween: 35,
    },
  },
});
