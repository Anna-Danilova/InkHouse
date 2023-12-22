"use strict";

// BURGER-MENU

const menu = document.querySelector(".main-menu__list");
const menuBtn = document.querySelector(".main-menu__button");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("main-menu__list--open");
  menuBtn.classList.toggle("main-menu__button--close");
});

//TABS

const tabs = document.querySelectorAll(".countries-list__button");
const lists = document.querySelectorAll(".assortment__list");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    for (let t = 0; t < tabs.length; t++) {
      tabs[t].classList.remove("countries-list__button--active");
    }
    event.target.classList.add("countries-list__button--active");
  });
  tabs[i].addEventListener("click", function () {
    for (let c = 0; c < tabs.length; c++) {
      lists[c].classList.remove("assortment__list--active");
    }
    lists[i].classList.add("assortment__list--active");
  });
}
