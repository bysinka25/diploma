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
});
