import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
    
const swiper = new Swiper('.mostAcessed-swiper', {
  direction: 'horizontal',
  slidesPerView: 3  ,
  loop: true,
  grabCursor:true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0: {
      slidesPerView: 1,
      allowSlideNext:'true',
      allowSlidePrev:'true',
    },
    576: {
      slidesPerView: 2,
    },
    900:{
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 5,
    },
  }
});

      const swiper2 = new Swiper('.recently-swiper', {
        direction: 'horizontal',
        slidesPerView: 3  ,
        loop: true,
        grabCursor:true,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints:{
          0: {
              slidesPerView: 1,
              allowSlideNext:'true',
              allowSlidePrev:'true',
          },
          576: {
              slidesPerView: 2,
              
          },
          900:{
              slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 5,
          },
        }
      });

    const swiper3 = new Swiper('.feedback-swiper', {
        direction: 'horizontal',
        slidesPerView: 3  ,
        loop: true,
        grabCursor:true,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints:{
          0: {
              slidesPerView: 1,
              allowSlideNext:'true',
              allowSlidePrev:'true',
          },
          576: {
              slidesPerView: 2,
              
          },
          900:{
              slidesPerView: 3,
          },
          
        }
      });
      