const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".nav");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("nav--active");
});
