app.component('services-offered', {
    template:
    /*html*/
    `
    <div class="servicesBlock" id="services">
        <h3>Our Services</h3>
        <div class="servicesCards">
            <div v-for='(card, index) in cards' :key='index' class="servicesCard" :style="{backgroundImage: 'url(' + card.image + ')'}">
                <i :class="card.icon"></i>
                <h4>{{ card.title }}</h4>
                <Button text="Learn More"></Button>
            </div>
        </div>

    </div>
    `,
    data() {
        return {
            cards: [
                {title: 'Psychotherapy', icon: 'fa-solid fa-brain', image: '../images/session1.jpg'},
                {title: 'Psychiatric Medication Management', icon: "fa-solid fa-capsules", image: '../images/beachBrain.jpg'},
                {title: 'Applied Behavioral Analysis', icon: "fa-solid fa-clipboard", image: '../images/mindNoodle.jpg'},
            ]
        }
    }
})