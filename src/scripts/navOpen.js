const burger = document.querySelector('.ham');
const navMenu = document.querySelector('.nav--header');
const navLinks = document.querySelectorAll('.nav_item-link');

burger.addEventListener('click', function () {
  navMenu.classList.toggle('nav--active');
})

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    navMenu.classList.remove('nav--active');
    burger.classList.remove('active');
  })
}