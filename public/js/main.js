/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("let swiper = new Swiper(\".mySwiper\", {\r\n  pagination: {\r\n    el: \".swiper-pagination\",\r\n  },\r\n});\r\n\r\nlet swiper1 = new Swiper(\".mySwiper1\", {\r\n  pagination: {\r\n    el: \".swiper-pagination1\",\r\n    type: \"progressbar\",\r\n  },\r\n  spaceBetween: 20,\r\n  speed: 100,\r\n  slidesPerView: 4,\r\n});\r\n\r\nvar swiper2 = new Swiper(\".mySwiper2\", {\r\n  effect: \"coverflow\",\r\n  grabCursor: true,\r\n  centeredSlides: true,\r\n  slidesPerView: \"3\",\r\n  coverflowEffect: {\r\n    rotate: 100,\r\n    stretch: -50,\r\n    depth: 100,\r\n    modifier: 0,\r\n  },\r\n  navigation: {\r\n    nextEl: \".swiper-button-next\",\r\n    prevEl: \".swiper-button-prev\",\r\n  },\r\n  initialSlide: 1,\r\n});\r\n\r\n// map with dots\r\nvar isActive = 0;\r\nvar isLoading = 1;\r\nconst count = document.querySelectorAll(\"[data-id]\");\r\n\r\nfunction removeClass() {\r\n  let infoCards = document.querySelectorAll(\"[data-info-id]\");\r\n  infoCards.forEach((el) => {\r\n    el.classList.remove(\"show\");\r\n  });\r\n}\r\nfunction removeCircle() {\r\n  count.forEach((el) => {\r\n    el.style.display = \"none\";\r\n  });\r\n}\r\nfunction ready() {\r\n  function setAround(percent, idx) {\r\n    removeCircle();\r\n    let beforeElemIdx = idx === 0 ? count.length - 1 : idx - 1;\r\n    let beforeElem = document.querySelector(\r\n      '[data-id=\"' + beforeElemIdx + '\"]'\r\n    );\r\n    let elem = document.querySelector('[data-id=\"' + idx + '\"]');\r\n    elem.style.display = \"block\";\r\n    beforeElem.style.display = \"block\";\r\n    const math = 2 * Math.PI * elem.r.baseVal.value;\r\n\r\n    elem.style.strokeDasharray = `${math} 1000`;\r\n\r\n    let a = math * (1 - percent / 100);\r\n    elem.style.strokeDashoffset = a;\r\n\r\n    if (percent >= 99.5) {\r\n      removeClass();\r\n      let infoShow = document.querySelector(`[data-info-id=\"${idx}\"]`);\r\n      infoShow.classList.add(\"show\");\r\n      isLoading++;\r\n      if (isLoading === count.length) {\r\n        isLoading = 0;\r\n      }\r\n    }\r\n  }\r\n\r\n  requestAnimationFrame(draw);\r\n\r\n  function draw(t) {\r\n    let idx = isLoading;\r\n    requestAnimationFrame(draw);\r\n    setAround((t / 40) % 100, idx);\r\n  }\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", ready);\r\n\r\nlet index = [0, 1, 2, 3, 4, 5, 6]\r\nvar dots = document.querySelectorAll(\".dota\");\r\nvar infoCards = document.querySelectorAll(\"[data-info-id]\");\r\n\r\nconst daty = document.querySelectorAll(`[data-info-id='${index}']`);\r\nconst dotas = document.querySelectorAll(`[data-dota='${index}']`);\r\nlet circle = document.querySelectorAll('[data-id]');\r\n\r\nlet i = 0;\r\n\r\ndots.forEach((el) => {\r\n  el.addEventListener('click', () => {\r\n    let idx = el.dataset.dota;\r\n    showInfo(idx)\r\n  });\r\n});\r\n\r\nfunction showInfo(idx) {\r\n  removeClass();\r\n  let elem = document.querySelector(`[data-info-id='${idx}']`);\r\n  console.log(elem);\r\n  elem.classList.add('show');\r\n}\r\n\n\n//# sourceURL=webpack://gulp-settings/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;