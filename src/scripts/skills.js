import Vue from 'vue';


const skill = {
  template: "#skills-row-item",
  props: {
    skillName: String,
    skillPercent: Number
  }
}

const skillsRow = {
  template: "#skills-row",
  props: {
    skill: Object
  },
  components: {
    skill
  }
}


new Vue({
  el: "#skills-container",
  template: "#skills-list",
  components: {
    skillsRow
  },
  data() {
    return {
      skills: []
    }
  },
  created() {
    const data = require('../data/skills.json');

    this.skills = data;
  }
})