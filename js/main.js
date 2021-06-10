const swiper = new Swiper(".merit-container", {
  spaceBetween: 10,
  slidesPerView: 2,
  slidesPerColumn: 2,
  slidesPerColumnFill: "row",
  loop: false,
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
    575: {
      spaceBetween: 16,
    },
    776: {
      spaceBetween: 26,
      slidesPerView: 2,
      slidesPerColumn: 1,
    },
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 1,
    },
    1440: {
      slidesPerView: 4,
      slidesPerColumn: 1,
    },
    1920: {
      slidesPerView: 2,
      slidesPerColumn: 1,
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
  // console.log("Клик по кнопке меню");
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
      required: "Введите своё имя",
      minlength: "Имя должно быть больше двух букв",
    },
    email: {
      required: "Нужен адрес email чтобы связаться с вами",
      email: "Адрес должен быть в формате name@domain.ru",
    },
    phone: {
      required: "Телефон обязателен",
      minlength: "Должен быть больше 10 цифр",
    },
  },
});
$(".newsletter__form").validate({
  errorClass: "invalid",
  messages: {
    email: {
      required: "Нужен адрес email чтобы связаться с вами",
      email: "Адрес должен быть в формате name@domain.ru",
    },
  },
});
$(".modal__input--phone_us").mask("+7 (000) 000-00-00");
// $(window).scroll(function () {
//   var height = $(window).scrollTop();
//   if (height > 100) {
//     $("#top").fadeIn();
//   } else {
//     $("#top").fadeOut();
//   }
// });
// $(document).ready(function () {
//   $("#top").click(function (event) {
//     event.preventDefault();
//     $("html, body").animate({ scrollTop: 0 }, "slow");
//     return false;
//   });
// });
$("a[href='#top']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
// $("a[href='#book']").click(function () {
//   $("html, body").animate({ scrollTop: 0 }, "slow");
//   return false;
// });
// $("a[href='#blog']").click(function () {
//   $("html, body").animate({ scrollBottom: 0 }, "slow");
//   return false;
// });
// var basicScrollTop = function () {
//   // The button
//   var btnTop = document.querySelector(".anchor__button");
//   // Reveal the button
//   var btnReveal = function () {
//     var position = document.querySelector("#position");
//     position.innerHTML = window.scrollY + "px";
//     if (window.scrollY >= 300) {
//       btnTop.classList.add("__is-visible");
//     } else {
//       btnTop.classList.remove("__is-visible");
//     }
//   };
//   // Smooth scroll top
//   // Thanks to => http://stackoverflow.com/a/22610562
//   var TopscrollTo = function () {
//     if (window.scrollY != 0) {
//       setTimeout(function () {
//         window.scrollTo(0, window.scrollY - 30);
//         TopscrollTo();
//       }, 5);
//     }
//   };
//   // Listeners
//   window.addEventListener("scroll", btnReveal);
//   btnTop.addEventListener("click", TopscrollTo);
// };
// basicScrollTop();
// var btn = $(".anchor__button");

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass(".anchor");
//   } else {
//     btn.removeClass(".anchor");
//   }
// });

// btn.on("click", function (e) {
//   e.preventDefault();
//   $("html, body").animate({ scrollTop: 0 }, "300");
// });
document.addEventListener("DOMContentLoaded", function (event) {
  // 选择按钮
  var back2top = document.getElementsByClassName("anchor__button")[0];

  // 滚动到一定位置显示按钮
  document.addEventListener("scroll", function (event) {
    if (getScollTop() > 1500) {
      back2top.style.display = "block";
    } else {
      back2top.style.display = "none";
    }
  });

  // 点击按钮返回顶部
  back2top.addEventListener("click", function (event) {
    window.scrollTo(0, 0);
  });
});

// 获取滚动位置函数
function getScollTop() {
  var scrollTop = 0;
  if (window.pageYOffset) {
    scrollTop = window.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
}
$(document).ready(function () {
  $("#blog").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке

    event.preventDefault();

    //забираем идентификатор бока с атрибута href

    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь

      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс

    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
$(document).ready(function () {
  $("#book").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке

    event.preventDefault();

    //забираем идентификатор бока с атрибута href

    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь

      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс

    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
$(document).ready(function () {
  $("#best").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке

    event.preventDefault();

    //забираем идентификатор бока с атрибута href

    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь

      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс

    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
document.querySelectorAll(".like").forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("active");
  });
});
