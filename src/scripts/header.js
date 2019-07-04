var lastScrollTop = 0;
window.onscroll = onScroll;
const header = document.querySelector('.header');

function onScroll(e) {
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
}