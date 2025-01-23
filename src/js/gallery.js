// document.addEventListener('DOMContentLoaded', function () {
//   const swiper = new Swiper('.swiper', {
//     slidesPerView: 'auto',
//     spaceBetween: 24,
//     loop: true,
//     centeredSlides: true,
//     loopedSlides: 5,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     on: {
//       slideChangeTransitionEnd: () => {
//         updateSlideStyles();
//       },
//       click: (swiper, event) => {
//         updateSlideStyles(swiper.clickedIndex);
//       },
//     },

//     breakpoints: {
//       320: {
//         slidesPerView: 1.2,
//         spaceBetween: 16,
//       },
//       1200: {
//         slidesPerView: 'auto',
//         spaceBetween: 24,
//       },
//     },
//   });

//   updateSlideStyles();

//   function updateSlideStyles(clickedIndex = null) {
//     const slides = document.querySelectorAll('.swiper-slide');

//     // Індекс центрального слайду
//     const activeIndex = clickedIndex !== null ? clickedIndex : swiper.realIndex;

//     slides.forEach((slide, index) => {
//       // Обчислюємо різницю між поточним індексом та активним для визначення, чи це центральне зображення
//       const diff = Math.abs(index - activeIndex);

//       if (diff === 0) {
//         // Центральне зображення
//         slide.style.transform = 'scale(1)';
//         slide.style.filter = 'brightness(1)';
//         slide.style.zIndex = '2';
//       } else {
//         // Бокові зображення (ліва та права)
//         slide.style.transform = 'scale(0.8)';
//         slide.style.filter = 'brightness(0.5)';
//         slide.style.zIndex = '1';
//       }
//     });
//   }
// });
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

  //   function updateSlideStyles(clickedIndex = null) {
  //     const slides = document.querySelectorAll('.swiper-slide');

  //     const activeIndex = clickedIndex !== null ? clickedIndex : swiper.realIndex;

  //     slides.forEach((slide, index) => {
  //       const diff = Math.abs(index - activeIndex);

  //       if (diff === 0) {
  //         slide.style.transform = 'scale(1)';
  //         slide.style.filter = 'brightness(1)';
  //         slide.style.zIndex = '2';
  //       } else {
  //         slide.style.transform = 'scale(0.8)';
  //         slide.style.filter = 'brightness(0.5)';
  //         slide.style.zIndex = '1';
  //       }
  //     });
  //   }

  //   updateSlideStyles(swiper.realIndex);
  // });
  function updateSlideStyles() {
    const slides = document.querySelectorAll('.swiper-slide');
    const activeIndex = swiper.realIndex; // Індекс активного слайда

    slides.forEach((slide, index) => {
      const realIndex = parseInt(
        slide.getAttribute('data-swiper-slide-index'),
        10
      ); // Отримуємо реальний індекс слайда

      if (realIndex === activeIndex) {
        // Центральне зображення
        slide.style.transform = 'scale(1)';
        slide.style.filter = 'brightness(1)';
        slide.style.zIndex = '2';
      } else {
        // Бокові зображення
        slide.style.transform = 'scale(0.8)';
        slide.style.filter = 'brightness(0.5)';
        slide.style.zIndex = '1';
      }
    });
  }

  // Оновлюємо стилі для першого слайда при завантаженні
  updateSlideStyles();
});
