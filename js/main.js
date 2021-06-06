const swiper = new Swiper(".slider__advantages", {
  // Optional parameters
  slidesPerView: 4,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider__button-next",
    // prevEl: ".slider__button-prev",
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
      spaceBetweenSlides: 26,
    },
    1200: {
      slidesPerView: 4,
      spaceBetweenSlides: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetweenSlides: 40,
    },
    776: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },
  },
});
var reviewsSlider = new Swiper(".unbublished-container", {
  // Optional parameters
  loop: true,
  slidesPerView: 5,
  spaceBetweenSlides: 30,
  // Navigation arrows
  navigation: {
    nextEl: ".unbublished-slider__button--next",
    prevEl: ".unbublished-slider__button--prev",
  },
  effect: "slide",
  keyboard: {
    enabled: "true",
    onlyInViewport: "true",
  },
  1200: {
    slidesPerView: 4,
    spaceBetweenSlides: 20,
  },
  991: {
    slidesPerView: 3,
    spaceBetweenSlides: 30,
  },
});
// $clamp(myParagraph, { clamp: "15px" });
// $(".video__play").on("click", function () {
//   $(this).toggleClass("pause play");
// });
document.getElementById("play").onclick = function () {
  if (document.getElementById(".video__play").paused) {
    document.getElementById(".video__play").play();
    this.innerHTML = "Pause";
  } else {
    document.getElementById("video__play").pause();
    this.innerHTML = "Play";
  }
};
var player;
// $(".video__play").on("play", function () {
//   //Меняем текст кнопки на "Пауза"
// });

// $(".video__play").on("pause", function () {
//   //Меняем текст кнопки на "Воспроизвести"
// });

$(".video__play").on("click", function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: "gzeDQDbJMAU",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
});
function onPlayerReady(event) {
  event.target.playVideo();
}
