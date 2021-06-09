const swiper = new Swiper(".merit-container", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 26,
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: ".merit__button--next",
    prevEl: ".merit__button--prev",
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
    1200: {
      slidesPerView: 4,
      slidesPerColumnFill: "row",
      loop: false,
    },
    991: {
      slidesPerView: 4,
      slidesPerColumnFill: "row",
      loop: false,
    },
    776: {
      slidesPerView: 4,
      slidesPerColumnFill: "row",
      loop: false,
    },
  },
});
var reviewsSlider = new Swiper(".unbublished-container", {
  // Optional parameters
  slidesPerView: 5,
  spaceBetweenSlides: 10,
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
      spaceBetweenSlides: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetweenSlides: 10,
    },
    991: {
      slidesPerView: 3,
      spaceBetweenSlides: 10,
    },
    776: {
      slidesPerView: 2,
      spaceBetweenSlides: 10,
    },
    576: {
      slidesPerView: 1,
      spaceBetweenSlides: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 10,
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
var closeModalOverlay = $(".modal__overlay");
modalButton.on("click", openModal);

closeModalButton.on("click", closeModal);
closeModalOverlay.on("click", closeModal);

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
var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
  document.querySelector(".header-nav").classList.toggle("header-nav--visible");
  var $body = $(document.body);
  if ($body.css("overflow") == "hidden") {
    $body.css("overflow", "auto");
  } else {
    $body.css("overflow", "hidden");
  }
});
// Обработка форм
$(".modal__form").validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Please specify your name",
      minlength: "The name must be more than two letters",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
    phone: {
      required: "Phone is required",
      minlength: "You must enter 10 digits",
    },
  },
});
$(".newsletter__form").validate({
  errorClass: "invalid",
  messages: {
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
  },
});
$(".modal__input--phone_us").mask("+7 (000) 000-00-00");
AOS.init();
