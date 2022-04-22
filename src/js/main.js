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

var swiper2 = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  coverflowEffect: {
    rotate: 100,
    stretch: -50,
    depth: 100,
    modifier: 0,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  initialSlide: 1,
});

// map with dots
var isActive = 0;
var isLoading = 1;
const count = document.querySelectorAll("[data-id]");

function removeClass() {
  let infoCards = document.querySelectorAll("[data-info-id]");
  infoCards.forEach((el) => {
    el.classList.remove("show");
  });
}
function removeCircle() {
  count.forEach((el) => {
    el.style.display = "none";
  });
}
function ready() {
  function setAround(percent, idx) {
    removeCircle();
    let beforeElemIdx = idx === 0 ? count.length - 1 : idx - 1;
    let beforeElem = document.querySelector(
      '[data-id="' + beforeElemIdx + '"]'
    );
    let elem = document.querySelector('[data-id="' + idx + '"]');
    elem.style.display = "block";
    beforeElem.style.display = "block";
    const math = 2 * Math.PI * elem.r.baseVal.value;

    elem.style.strokeDasharray = `${math} 1000`;

    let a = math * (1 - percent / 100);
    elem.style.strokeDashoffset = a;

    if (percent >= 99.5) {
      removeClass();
      let infoShow = document.querySelector(`[data-info-id="${idx}"]`);
      infoShow.classList.add("show");
      isLoading++;
      if (isLoading === count.length) {
        isLoading = 0;
      }
    }
  }

  requestAnimationFrame(draw);

  function draw(t) {
    let idx = isLoading;
    requestAnimationFrame(draw);
    setAround((t / 40) % 100, idx);
  }
}

document.addEventListener("DOMContentLoaded", ready);

let index = [0, 1, 2, 3, 4, 5, 6]
var dots = document.querySelectorAll(".dota");
var infoCards = document.querySelectorAll("[data-info-id]");

const daty = document.querySelectorAll(`[data-info-id='${index}']`);
const dotas = document.querySelectorAll(`[data-dota='${index}']`);
let circle = document.querySelectorAll('[data-id]');

let i = 0;

dots.forEach((el) => {
  el.addEventListener('click', () => {
    let idx = el.dataset.dota;
    showInfo(idx)
  });
});

function showInfo(idx) {
  removeClass();
  let elem = document.querySelector(`[data-info-id='${idx}']`);
  console.log(elem);
  elem.classList.add('show');
}
