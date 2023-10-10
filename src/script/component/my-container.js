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
        .my-container h1,h2,h3  {
            color: #5C8374;
        }
          </style>
          
    <div class="my-container">
      <h1>Welcom To Aplikasi Country Finder</h1>
      <h2>Submission Dicoding </h2  >
      <h3>Khairul Badri</h3>
    </div>
        `;
      }
    }

    customElements.define('my-container', MyContainer);