class CountryItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set country(country) {
        this._country = country;
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
      margin-bottom: 22px;
      box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      overflow: hidden;
  }

  .country-symbol {
      display: flex;
      flex-direction: row;
      justify-content: center;
  }

  .country-symbol img {
    margin: 18px;
    border-radius: 14px;
  }

  .country-flag {
      width: 380px;
      height: 200px;
      object-position: center;
      box-shadow: 3.6px 6.6px 6.6px hsl(0deg 0% 0% / 0.80);

  }

  .country-coat {
      width: 180px;
      height: 180px;
      max-height: 50%;
      object-position: center;
      text-align: center;
  }

  .country-info {
      padding: 26px;
      border-radius: 10px;
  }

  .country-info>h2 {
      font-weight: bold;
      font-size: 30px;
      font-family: 'Mochiy Pop One', sans-serif;
  }

  .country-info>p {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10;
  }

  .country-sub-info {
    width: 100%;
    margin: 20px auto;
    display: flex;
}

.country-sub-info p {
    padding: 0;
    font-size: 20px;
    word-wrap: break-word;
}

.country-sub-info .namelist {
    margin-bottom: 15px;
}

.country-sub-info .row {
    flex-direction: row;
    width: 30%;
}

.country-sub-info .row p {
    text-align: left;
    color: #5C8374;
    font-weight: bold;
    margin-right: 10px;
}

.country-sub-info .col {
    flex-direction: row;
    width: 70%;
}

.country-sub-info .col p {
    text-align: left;
    margin: 0 0 5px 0;
}

@media screen and (max-width:768px) {
    .country-symbol {
        flex-direction: column;
        justify-content: center;
        content-align: center;
        margin: auto;
    }

    .country-symbol img {
        max-width: 300px;
        height: 150px;
        margin: 20px auto;
    }

    .country-sub-info p {
        font-size: 16px;
    }
}

@media screen and (max-widht:425px) {
    .country-sub-info p {
        font-size: 14px;
    }
}
      </style>
      <div class="country-container">
    <div class="country-symbol">
        <img class="country-flag" src="${this._country.flags.png}" alt="Country Flag">
        <img class="country-coat" src="${this._country.coatOfArms.svg}" alt="Country Coat">
    </div>
    <div class="country-info">
        <h2>${this._country.name.common}
            <hr>
        </h2>
        <div class="country-sub-info">
            <div class="row">
                <p>Capital</p>
            </div>
            <div class="col">
                <p>${this._country.capital}</p>
            </div>
        </div>
        <div class="country-sub-info">
            <div class="row">
                <p>Official Name</p>
            </div>
            <div class="col">
                <p>${this._country.name.official}</p>
            </div>
        </div>
        <div class="country-sub-info">
            <div class="row">
                <p>Common Name</p>
            </div>
            <div class="col">
                <p>${this._country.name.common}</p>
            </div>
        </div>
        <div class="country-sub-info">
            <div class="row">
                <p>Region</p>
            </div>
            <div class="col">
                <p>${this._country.region}</p>
            </div>
        </div>
        <div class="country-sub-info">
            <div class="row">
                <p>Sub Region</p>
            </div>
            <div class="col">
                <p>${this._country.subregion}</p>
            </div>
        </div>
        <div class="country-sub-info">
            <div class="row">
                <p>Time Zone</p>
            </div>
            <div class="col">
                <p>${this._country.timezones}</p>
            </div>
        </div>
        <div class="country-sub-info">
                <div class="row">
                    <p>Other Country Names</p>
                </div>
                <div class="col">
                <p>${this._country.translations.spa.official}</p>
                <p>${this._country.translations.fra.official}</p>
                    <p>${this._country.translations.ara.official}</p>
                    <p>${this._country.translations.urd.official}</p>
                    <p>${this._country.translations.jpn.official}</p>
                    <p>${this._country.translations.kor.official}</p>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}


customElements.define('country-item', CountryItem);