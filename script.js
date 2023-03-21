let wrapperButton = document.querySelector(".wrapper-burger-btn");
let menuButton = document.querySelector(".menu-button");
let wrapperBurger = document.querySelector(".wrapper-burger");

wrapperButton.onclick = function () {
  wrapperBurger.classList.remove("burger-show");
  wrapperButton.classList.remove("burger-show");
};

// menuButton.onclick = function () {
//   wrapperBurger.classList.add("burger-show");
//   menuButton.classList.add("burger-show");
// };

const menu = function () {
  wrapperBurger.classList.add("burger-show");
  menuButton.classList.add("burger-show");
};
menuButton.addEventListener("click", menu);
