document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    simulateTouch: true,
    allowTouchMove: true,
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      },

      1200: {
        slidesPerView: 'auto',
        spaceBetween: 24,
      },
    },
  });
});
