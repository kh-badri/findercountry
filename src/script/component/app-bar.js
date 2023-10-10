class AppBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          width: 100%;
          background-color: #5C8374;
          color: white;
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
        }
        h2 {
          padding: 18px;
          text-align: center;
          font-family: 'Mochiy Pop One', sans-serif;
        }
      </style>
      
      <h2>Country Finder</h2>
    `;
  }
}

customElements.define('app-bar', AppBar);