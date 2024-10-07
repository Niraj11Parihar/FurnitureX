var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
    },
  });
  