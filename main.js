const app = Vue.createApp({
  data() {
    return {
      entity: "Renaissance Solutions",
      address: "1924 Southwood Dr, Lake Charles, LA 70605",
      tel: "(337) 240-8162",
      cards: [
        {
          title: "Psychotherapy",
          icon: "fa-solid fa-clipboard",
          image: "./images/sessionImg.jpg",
          url: "psychotherapy",
        },
        {
          title: "Psychiatric Medication Management",
          icon: "fa-solid fa-capsules",
          image: "./images/beachBrain.jpg",
          url: "psychMedManagement",
        },
        {
          title: "Applied Behavioral Analysis",
          icon: "fa-solid fa-brain",
          image: "./images/shoreline.jpg",
          url: "aba",
        },
      ],
      persons: [
        {
          first_name: "Jimmy",
          last_name: "Trahan",
          title: "LPC",
          role: "Admin",
        },
        {
          first_name: "Christina",
          last_name: "LeBlanc",
          title: "Office Manager",
          role: "Admin",
        },
        {
          first_name: "Sarah",
          last_name: "Walker",
          title: "APRN-PMHNP",
          role: "Admin",
        },
        {
          first_name: "Dominique",
          last_name: "Rougeau",
          title: "ABA",
          role: "Admin",
        },
        {
          first_name: "Jaqueline",
          last_name: "Taylor",
          title: "APRN-PMHNP",
          role: "Employee",
        },
        {
          first_name: "Katherine",
          last_name: "Devillier",
          title: "APRN-PMHNP",
          role: "Employee",
        },
        {
          first_name: "Lindsay",
          last_name: "Lopez",
          title: "LPC",
          role: "Employee",
        },
        {
          first_name: "Kehri",
          last_name: "Jones",
          title: "BCBA",
          role: "Employee",
        },
        {
          first_name: "Jirita",
          last_name: "Atkins",
          title: "BCBA",
          role: "Employee",
        },
        {
          first_name: "Todd",
          last_name: "Furman",
          title: "BCBA",
          role: "Employee",
        },
        {
          first_name: "Todd",
          last_name: "Gatte",
          title: "APRN-PMHNP",
          role: "Employee",
        },
      ],
    };
  },
  methods: {
    fullName(i) {
      const person = this.persons[i];
      // return person.first_name + " " + person.last_name;
      return `${person.first_name} ${person.last_name}`;
    },
  },
});
