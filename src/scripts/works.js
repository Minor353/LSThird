import Vue from 'vue';

const sliderTags = {
  template: "#slider-tags",
  props: {
    tags: Array
  }
}

const sliderBtns = {
  template: "#slider-btns",
  props: {
    currentWork: Object,
    works: Array
  }
}

const sliderThumbs = {
  template: "#slider-thumbs",
  props: {
    works: Array,
    currentWork: Object
  }
}

const sliderDisplay = {
  template: "#slider-display",
  props: {
    works: Array,
    currentWork: Object
  },
  computed: {
    reversedWorks() {
      return [...this.works].reverse()
    }
  },
  components: {
    sliderThumbs,
    sliderBtns
  }
}

const sliderInfo = {
  template: "#slider-info",
  props: {
    currentWork: Object
  },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(', ');
    }
  },
  components: {
    sliderTags
  }
}

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    sliderDisplay,
    sliderInfo
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;

        return item;
      });
    },
    handleSlide(direction) {
      switch (direction) {
        case 'next':
          if (this.currentIndex < this.works.length - 1) {
            this.currentIndex++;
          }
          break;
        case 'prev':
          if (this.currentIndex > 0) {
            this.currentIndex--;
          }
          break;
      }

    }
  },
  created() {
    const data = require('../data/works.json');

    this.works = this.makeArrWithRequiredImages(data);
  }
});