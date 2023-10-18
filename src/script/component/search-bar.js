class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');
        .search-container {
          max-width: 900px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
          padding: 18px;
          border-radius: 8px;
          display: flex;
          position: sticky;
          top: 14px;
          background-color: white;
        }
       
        .search-container > input {
          width: 75%;
          padding: 16px;
          border: 0;
          border-bottom: 1px solid #5C8374;
          font-weight: bold;
          font-size: 21px;
        }
       
        .search-container > input:focus {
          outline: 0;
          border-bottom: 2px solid #5C8374;
        }
       
        .search-container > input:focus::placeholder {
          font-weight: bold;
        }
        
        .search-container >  input::placeholder {
          color: #5C8374;
          font-weight: normal;
          font-size: 21px;
        }
       
        .search-container > button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          background-color: #5C8374;
          color: white;
          border: 0;
          text-transform: uppercase;
          font-size: 16px;
          border-radius: 18px;
          font-family: 'Mochiy Pop One', sans-serif;
        }
       
        @media screen and (max-width: 550px){
          .search-container {
            flex-direction: column;
            position: static;
          }
     
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
     
          .search-container > button {
            width: 100%;
            border-radius: 15px
          }
        }
      </style>
      
      <div id="search-container" class="search-container">
        <input placeholder="search country" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);