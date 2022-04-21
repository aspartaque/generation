let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

let swiper1 = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination1",
    type: "progressbar",
  },
  spaceBetween: 20,
  speed: 100,
  slidesPerView: 4,
});

// 