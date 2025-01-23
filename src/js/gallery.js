document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    loopedSlides: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      // onClick: (swiper, event) => {
      //   updateSlideStyles(swiper.activeIndex);
      // },
    },
    on: {
      slideChangeTransitionEnd: () => {
        updateSlideStyles();
      },
    },
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

  function updateSlideStyles() {
    const slides = document.querySelectorAll('.swiper-slide');
    const activeIndex = swiper.realIndex;

    slides.forEach((slide, index) => {
      const realIndex = parseInt(
        slide.getAttribute('data-swiper-slide-index'),
        10
      );

      if (realIndex === activeIndex) {
        slide.style.transform = 'scale(1)';
        slide.style.filter = 'brightness(1)';
        slide.style.zIndex = '2';
      } else {
        slide.style.transform = 'scale(0.8)';
        slide.style.filter = 'brightness(0.5)';
        slide.style.zIndex = '1';
      }
    });
  }

  updateSlideStyles();
});
