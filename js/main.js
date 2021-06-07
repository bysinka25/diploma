const swiper = new Swiper(".slider__advantages", {
  // Optional parameters
  slidesPerView: 4,
  loop: false,
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
    576: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerColumnFill: "row",
      loop: false,
    },
    1920: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      spaceBetweenSlides: 40,
    },
    1440: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerColumnFill: "row",
      loop: false,
    },
    1200: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerColumnFill: "row",
      loop: false,
    },
    991: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerColumnFill: "row",
      loop: false,
    },
    776: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerColumnFill: "row",
      loop: false,
    },
  },
});
var reviewsSlider = new Swiper(".unbublished-container", {
  // Optional parameters
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
  breakpoints: {
    1440: {
      slidesPerView: 5,
      spaceBetweenSlides: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetweenSlides: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetweenSlides: 20,
    },
    776: {
      slidesPerView: 1,
      spaceBetweenSlides: 20,
    },
    576: {
      slidesPerView: 1,
      spaceBetweenSlides: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 20,
    },
  },
});
// $clamp(myParagraph, { clamp: "15px" });
// $(".video__play").on("click", function () {
//   $(this).toggleClass("pause play");
// });
// document.getElementById("play").onclick = function () {
//   if (document.getElementById(".video__play").paused) {
//     document.getElementById(".video__play").play();
//     this.innerHTML = "Pause";
//   } else {
//     document.getElementById("video__play").pause();
//     this.innerHTML = "Play";
//   }
// };
// var player;
// $(".video__play").on("play", function () {
//   //Меняем текст кнопки на "Пауза"
// });

// $(".video__play").on("pause", function () {
//   //Меняем текст кнопки на "Воспроизвести"
// });

// // $(".video__play").on("click", function onYouTubeIframeAPIReady() {
// //   player = new YT.Player("player", {
// //     height: "100%",
// //     width: "100%",
// //     videoId: "gzeDQDbJMAU",
// //     events: {
// //       onReady: onPlayerReady,
// //       onStateChange: onPlayerStateChange,
// //     },
// //   });
// // });
// // function onPlayerReady(event) {
// //   event.target.playVideo();
// }
var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);

closeModalButton.on("click", closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
  var $body = $(document.body);
  var oldWidth = $body.innerWidth();
  $body.css("overflow", "hidden");
  $body.width(oldWidth);
}
function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
  var $body = $(document.body);
  $body.css("overflow", "auto");
  $body.width("auto");
}

$(document).keyup(function (event) {
  if (event.which == "27") {
    $(".modal__overlay").removeClass("modal__overlay--visible");
    $(".modal__dialog").removeClass("modal__dialog--visible");
  }
});
