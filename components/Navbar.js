app.component('navbar', {
    template:
    /*html*/
    `<nav>
        <img :src='logoImg' alt='nature path photo'>
        <ul>
            <li v-for="(link, index) in links" :key='index'><a :href="link.url">{{link.text}}</a></li>
        </ul>
    </nav>`,
data() {
    return {
        entityName: "Renaissance Solutions",
        logoImg: '../images/logo.jpeg',
        links: [
            {text: 'Home', url: 'index.html'},
            {text: 'Services', url: '#services'},
            {text: 'People', url: '#people'},
            {text: 'About', url: '#about'},
        ]
    }
}
})