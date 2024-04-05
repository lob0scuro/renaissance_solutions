app.component('navbar', {
    template:
    /*html*/
    `<nav>
        <img :src='logoImg' alt='renaissance solution logo'>
        <i class="fa-solid fa-bars" @click.prevent="toggleNav"></i>
        <ul v-if="navOpen">
            <li v-for="(link, index) in links" :key='index'><a :href="link.url">{{link.text}}</a></li>
        </ul>
    </nav>`,
data() {
    return {
        navOpen: false,
        entityName: "Renaissance Solutions",
        logoImg: './images/logo.jpeg',
        links: [
            {text: 'Home', url: 'index.html'},
            {text: 'Services', url: '#services'},
            {text: 'People', url: '#people'},
            {text: 'About', url: '#about'},
        ]
    }
},
methods: {
    toggleNav() {
        this.navOpen = !this.navOpen
    }
}
})