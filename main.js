const app = Vue.createApp({
  data() {
    return {
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
          title: "Professional Counselor",
          role: "Admin",
        },
        {
          first_name: "Oshe",
          last_name: "Lewis-Reese",
          title: "Professional Counselor",
          role: "Employee",
        },
        {
          first_name: "Lindsay",
          last_name: "Lopez",
          title: "Professional Counselor",
          role: "Employee",
        },
        {
          first_name: "Sarah",
          last_name: "Walker",
          title: "Nurse Practitioner",
          role: "Employee",
        },
        {
          first_name: "Jaqueline",
          last_name: "Taylor",
          title: "Nurse Practitioner",
          role: "Employee",
        },
      ],
    };
  },
  computed: {
    fullName() {
      for (person in this.persons) {
        return person.first_name + " " + person.last_name;
      }
    },
  },
});
