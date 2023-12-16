"use strict";

const menu = document.querySelector(".main-menu__list");
const menuBtn = document.querySelector(".main-menu__button");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("main-menu__list--open");
  menuBtn.classList.toggle("main-menu__button--close");
});
