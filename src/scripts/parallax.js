const parent = document.querySelector("body");
const item1 = document.querySelector(".parallax-7");
const item2 = document.querySelector(".parallax-6");
const item3 = document.querySelector(".parallax-5");
const item4 = document.querySelector(".parallax-4");
const item5 = document.querySelector(".parallax-3");
const item6 = document.querySelector(".parallax-2");
const item7 = document.querySelector(".parallax-1");


var center = {
  x: parent.offsetWidth / 6,
  y: parent.offsetHeight / 6
};


parent.onmousemove = function (event) {
  item1.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 85) + 'px, ' +
    Math.round((center.y - event.pageY) / 85) + 'px, 0);');

  item2.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 60) + 'px, ' +
    Math.round((center.y - event.pageY) / 60) + 'px, 0);');

  item3.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 50) + 'px, ' +
    Math.round((center.y - event.pageY) / 70) + 'px, 0);');

  item4.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 10) + 'px, ' +
    Math.round((center.y - event.pageY) / 15) + 'px, 0);');

  item5.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 40) + 'px, ' +
    Math.round((center.y - event.pageY) / 10) + 'px, 0);');

  item6.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 25) + 'px, ' +
    Math.round((center.y - event.pageY) / 85) + 'px, 0);');

  item7.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 20) + 'px, ' +
    Math.round((center.y - event.pageY) / 80) + 'px, 0);');
}