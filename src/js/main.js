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
    setAround((t / 50) % 100, idx);
  }
}

document.addEventListener("DOMContentLoaded", ready);
