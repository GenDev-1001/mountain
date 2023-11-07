const burgerBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".nav__menu");

const clickBurgerHandle = () => {
  menu.classList.toggle("nav__menu--active");
  burgerBtn.classList.toggle('menu__btn--active');
}

burgerBtn.addEventListener('click', clickBurgerHandle);