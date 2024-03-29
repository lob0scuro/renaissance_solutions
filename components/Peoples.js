app.component("peoples", {
  props: {
    persons: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `   <div v-for="(person, index) in persons" class="personBlock" id="index">
        <div  class="personBlurb" >
            <h5>{{person.first_name}} {{person.last_name}} - <small>{{person.title}}</small></h5>
        
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia omnis tempora esse quisquam porro laboriosam voluptas architecto. Error, reprehenderit iure!</p>
        </div>
        <img src="./images/employee.jpg" alt="employee photo" width="50%" height="auto">
    </div>`,
});
