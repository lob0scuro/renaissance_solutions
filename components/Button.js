app.component('Button', {
    props: {
        text: {
            type: String,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="buttonBlock">
        <button>{{ text }}</button>
     </div>`
})