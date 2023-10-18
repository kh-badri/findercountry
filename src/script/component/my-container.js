class MyContainer extends HTMLElement {

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
          .my-container {
            background: rgba(255, 255, 255, 0.486);
            border-radius: 10px;
            box-shadow: 0 5px 10px rgba(110, 139, 64, 0.5), 0 15px 40px rgba(166, 173, 201, 1);
            padding: 50px;
            margin: 50px;
            flex-direction: column;
            text-align: center;
            font-family: 'Mochiy Pop One', sans-serif;
        }
        @media screen and (max-width:768px) {
          my-container h3,h4 {
            font-size: 1.5em;
          }
        }

        @media screen and (max-width:478px) {
          my-container h3,h4 {
            font-size: 0.9em;
          }
        }

        @media screen and (min-width:455px) {
          my-container h3,h4 {
            font-size: 0.8em;
          }
        }

        .my-container h3,h4 {
            color: #5C8374;
            margin: 0;
        }
          </style>
          
    <div class="my-container">
      <h3>Welcome To</h3>
      <h4>Aplikasi Country Finder</h4>
    </div>
        `;
      }
    }

    customElements.define('my-container', MyContainer);