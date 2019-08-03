/**Анимация хедера */
var lastScrollTop = 0;
window.onscroll = onScroll;
const header = document.querySelector('.header');

/**Анимация скилов */
const circleWrap = document.querySelector('.skill_content');
const blockCord = circleWrap.getBoundingClientRect().top + window.pageYOffset;
const circleAnimate = document.querySelectorAll('.circles');

function onScroll(e) {
  /**Анимация хедера */
  var top = window.pageYOffset;


  if (lastScrollTop > top) {
    header.classList.add('header--scroll-active');
    header.classList.remove('header--active');


  } else if (lastScrollTop < top) {
    header.classList.remove('header--scroll-active');
    header.classList.remove('header--active');
  };

  if (top == 0) {
    header.classList.add('header--active');
    header.classList.remove('header--scroll-active');
  }
  lastScrollTop = top;

  /**Анимация скилов*/
  if (window.pageYOffset > (blockCord - 27)) {
    for (let i = 0; i < circleAnimate.length; i++) {
      circleAnimate[i].classList.add("circles-active");
    };
  } else if (window.pageYOffset < blockCord - 250) {
    for (let i = 0; i < circleAnimate.length; i++) {
      circleAnimate[i].classList.remove("circles-active");
    };
  };
}