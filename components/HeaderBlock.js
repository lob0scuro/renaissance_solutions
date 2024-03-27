app.component("header-block", {
  template:
    /*html*/
    `
    <div class="headerBlock">
        <img :src="mainImg" alt="nature path image">
        <div class="headerTextBlock">
            <h1><span class='secondary-font'>RENAISSANCE</span> <br/>SolutionS</h1>
            <p>healing minds, restoring lives</p>
        </div>
    </div>
    `,
  data() {
    return {
      mainImg: "../images/naturePath.jpg",
    };
  },
});
