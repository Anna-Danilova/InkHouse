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
const footerTab = document.querySelectorAll(".footer__tab");
const lists = document.querySelectorAll(".assortment__list");

function switchTab(button) {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      for (let t = 0; t < tabs.length; t++) {
        tabs[t].classList.remove("countries-list__button--active");
      }
      tabs[i].classList.add("countries-list__button--active");
    });
    button[i].addEventListener("click", function () {
      for (let c = 0; c < tabs.length; c++) {
        lists[c].classList.remove("assortment__list--active");
      }
      lists[i].classList.add("assortment__list--active");
    });
  }
}

switchTab(tabs);
switchTab(footerTab);
