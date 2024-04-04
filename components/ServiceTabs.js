app2.component("service-tabs", {
  template:
    /*html*/
    `
    <div class="tabs">
          <input
            type="radio"
            id="psychotherapy"
            name="serviceTabs"
            checked="checked"
          />
          <label for="psychotherapy">Psychotherapy</label>
          <div class="tab">
            <h2>Psychotherapy</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              nostrum voluptas atque modi provident deserunt doloremque. Aperiam
              ipsum, ex numquam unde, qui veniam itaque tempore recusandae,
              nihil laborum repudiandae. Laudantium odio nisi ex cumque quod.
            </p>
          </div>
          <input type="radio" id="psychmedmngmt" name="serviceTabs" />
          <label for="psychmedmngmt">Psych. Med Management</label>
          <div class="tab">
            <h2>Psychiatric Medication Management</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              nostrum voluptas atque modi provident deserunt doloremque. Aperiam
              ipsum, ex numquam unde, qui veniam itaque tempore recusandae,
              nihil laborum repudiandae. Laudantium odio nisi ex cumque quod.
            </p>
          </div>
          <input type="radio" id="aba" name="serviceTabs" />
          <label for="aba">ABA</label>
          <div class="tab">
            <h2>Applied Behavioral Analysis</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              nostrum voluptas atque modi provident deserunt doloremque. Aperiam
              ipsum, ex numquam unde, qui veniam itaque tempore recusandae,
              nihil laborum repudiandae. Laudantium odio nisi ex cumque quod.
            </p>
          </div>
        </div>
    `,
});
