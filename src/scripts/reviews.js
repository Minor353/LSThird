import Vue from 'vue';
import Flickity from 'vue-flickity';

const reviewsArticle = {
  template: "#reviews-article",
  props: {
    review: Object
  }
}

const reviewsBtn = {
  template: "#reviews-btn"
}

new Vue({
  el: "#reviews-component",
  template: "#reviews-slider",
  components: {
    Flickity,
    reviewsArticle
  },
  data() {
    return {
      reviews: [],
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        groupCells: true

        // any options from Flickity can be used
      }
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.pic}`);
        item.pic = requiredPic;

        return item;
      });
    }
  },
  created() {
    const data = require('../data/reviews.json');

    this.reviews = this.makeArrWithRequiredImages(data);
  }
});