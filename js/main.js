const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 4,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider__button-next",
    // prevEl: ".swiper-button-prev",
  },
  effect: "slide",
  keyboard: {
    enabled: "true",
    onlyInViewport: "true",
  },
  breakpoints: {
    // when window width is <= 499px
    576: {
      slidesPerView: 1,
      spaceBetweenSlides: 30,
    },
    // when window width is <= 999px
    1920: {
      slidesPerView: 4,
      spaceBetweenSlides: 40,
    },
    1440: {
      slidesPerView: 4,
      spaceBetweenSlides: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetweenSlides: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetweenSlides: 40,
    },
    776: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },
  },
});
