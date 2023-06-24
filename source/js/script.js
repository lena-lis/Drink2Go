let navMain = document.querySelector(".main-navigation");
let navToggle = document.querySelector(".main-navigation__toggle");
let navContainer = document.querySelector(".main-navigation__container");

navMain.classList.remove("main-navigation--nojs");
navMain.classList.add("main-navigation--closed");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.remove("main-navigation--closed");
    navMain.classList.add("main-navigation--opened");
  } else {
    navMain.classList.add("main-navigation--closed");
    navMain.classList.remove("main-navigation--opened");
  }
});
