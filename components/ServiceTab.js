app.component("service-tab", {
  props: {
    cards: { type: Object, required: true },
  },
  template:
    /*html*/
    `
  <ul>
    <li v-for="(card, index) in cards" :key="index" :data-tab-target="'#' + card.url" class="serviceCard" :class="{ 'active' : index === 0 }" @click="toggleNav()">{{ card.title }}</li>
  </ul>
  `,
  data() {
    return {
      activeTabIndex: 0,
    };
  },
  methods: {
    toggleNav() {
      const tabs = document.querySelectorAll("[data-tab-target]");
      const tabContents = document.querySelectorAll("[data-tab-content]");

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const target = document.querySelector(tab.dataset.tabTarget);
          tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
          });
          target.classList.add("active");

          tabs.forEach((tab) => {
            tab.classList.remove("active");
          });
          tab.classList.add("active");
          target.classList.add("active");
        });
      });
    },
  },
});
