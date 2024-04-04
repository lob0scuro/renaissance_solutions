app.component("Navigation", {
  template:
    /*html*/
    `<nav>
        <img :src='logoImg' alt='nature path photo'>
        <i class="fa-solid fa-bars" @click="toggleNav"></i>
        <div v-if="navOpen" class="nav-links">
        <ul>
            <li v-for="(link, index) in links" :key='index'><a :href="link.url">{{link.text}}</a></li>
        </ul>
        </div>
    </nav>`,
  data() {
    return {
      navOpen: false,
      entityName: "Renaissance Solutions",
      logoImg: "../images/logo.jpeg",
      links: [
        { text: "Home", url: "index.html" },
        { text: "Services", url: "#services" },
        { text: "People", url: "#people" },
        { text: "About", url: "#about" },
      ],
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
  },
});
