app.component("service-card", {
  props: {
    service: { type: String, required: true },
    icon: { type: String, required: false },
  },
  template:
    /*html*/
    `
  <div class="serviceCard" >
    <h5>{{ service }}</h5>
  </div>
  `,
});
