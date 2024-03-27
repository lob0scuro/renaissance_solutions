app.component("banner", {
  props: {
    text: {
      type: String,
      default: null,
    },
    bg: {
      type: String,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div class="banner" :style="{backgroundColor: bgColor}">
        <h5 v-if="text">{{ text }}</h5>
    </div>
    `,
});
