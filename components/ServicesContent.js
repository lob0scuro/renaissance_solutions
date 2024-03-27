app.component("services-content", {
  props: {
    cards: { type: Object, required: true },
  },
  template:
    /*html*/
    `<div v-for="(card, index) in cards" :id="card.url" class="service-content" :class="{'active' : index === 0}" data-tab-content>
    <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
    corporis impedit nostrum beatae qui rem dolor, sed nemo, porro
    deserunt reiciendis dolores dolorum placeat architecto.
    </p>
    <img :src="card.image" alt="stock psych session image" />
    </div>`,
});
