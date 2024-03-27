const app = Vue.createApp({
  data() {
    return {
      cards: [
        {
          title: "Psychotherapy",
          icon: "fa-solid fa-brain",
          image: "../images/session1.jpg",
        },
        {
          title: "Psychiatric Medication Management",
          icon: "fa-solid fa-capsules",
          image: "../images/beachBrain.jpg",
        },
        {
          title: "Applied Behavioral Analysis",
          icon: "fa-solid fa-clipboard",
          image: "../images/mindNoodle.jpg",
        },
      ],
    };
  },
});
