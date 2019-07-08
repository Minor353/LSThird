/**Main parallax */
const parent = document.querySelector("body");
const item1 = document.querySelector(".parallax-7");
const item2 = document.querySelector(".parallax-6");
const item3 = document.querySelector(".parallax-5");
const item4 = document.querySelector(".parallax-4");
const item5 = document.querySelector(".parallax-3");
const item6 = document.querySelector(".parallax-2");
const item7 = document.querySelector(".parallax-1");

/**reviews parallax*/
const reviewsParallax1 = document.querySelector(".paralax-reviews_layer-1");
const reviewsParallax2 = document.querySelector(".paralax-reviews_layer-2");
const reviewsParallax3 = document.querySelector(".paralax-reviews_layer-3");
const reviewsParallax4 = document.querySelector(".paralax-reviews_layer-4");


var center = {
  x: parent.offsetWidth / 6,
  y: parent.offsetHeight / 6
};


parent.onmousemove = function (event) {
  item1.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 85) + 'px, ' +
    Math.round((center.y - event.pageY) / 85) + 'px, 0);');

  item2.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 90) + 'px, ' +
    Math.round((center.y - event.pageY) / 80) + 'px, 0);');

  item3.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 30) + 'px, ' +
    Math.round((center.y - event.pageY) / 70) + 'px, 0);');

  item4.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 20) + 'px, ' +
    Math.round((center.y - event.pageY) / 15) + 'px, 0);');

  item5.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 30) + 'px, ' +
    Math.round((center.y - event.pageY) / 10) + 'px, 0);');

  item6.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 65) + 'px, ' +
    Math.round((center.y - event.pageY) / 85) + 'px, 0);');

  item7.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 20) + 'px, ' +
    Math.round((center.y - event.pageY) / 80) + 'px, 0);');

  /********************************/
  reviewsParallax1.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 85) + 'px, ' +
    Math.round((center.y - event.pageY) / 85) + 'px, 0);');

  reviewsParallax2.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 35) + 'px, ' +
    Math.round((center.y - event.pageY) / 40) + 'px, 0);');

  reviewsParallax3.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 45) + 'px, ' +
    Math.round((center.y - event.pageY) / 45) + 'px, 0);');

  reviewsParallax4.setAttribute('style', 'transform: translate3d(' +
    Math.round((center.x - event.pageX) / 25) + 'px, ' +
    Math.round((center.y - event.pageY) / 25) + 'px, 0);');

}