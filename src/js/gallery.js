document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    initialSlide: 2,
    loopedSlides: 5,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    simulateTouch: true,
    allowTouchMove: true,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },

      1200: {
        slidesPerView: 'auto',
        spaceBetween: 24,
      },
    },
  });
});
// document.addEventListener('DOMContentLoaded', function () {
//   const swiper = new Swiper('.swiper', {
//     slidesPerView: 'auto',
//     spaceBetween: 24,
//     loop: true,
//     centeredSlides: true,
//     loopedSlides: 3,
//     preloadImages: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     simulateTouch: true,
//     allowTouchMove: true,
//     watchSlidesProgress: true,

//     breakpoints: {
//       320: {
//         slidesPerView: 1.2,
//         spaceBetween: 16,
//         centeredSlides: true,
//       },

//       1200: {
//         slidesPerView: 1.2,
//         spaceBetween: 24,
//         centeredSlides: true,
//       },
//     },
//   });
// });
