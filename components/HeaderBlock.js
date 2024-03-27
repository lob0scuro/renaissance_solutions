app.component('header-block', {
    template:
    /*html*/
    `
    <div class="headerBlock">
        <img :src="mainImg" alt="nature path image">
        <div class="headerTextBlock">
            <h1>{{ entityName }}</h1>
            <p>healing minds, restoring lives</p>
        </div>
    </div>
    `,
    data() {
        return {
            mainImg: '../images/naturePath.jpg',
            entityName: 'Renaissance Solutions',
        }
    }
})