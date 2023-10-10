class DataSource {
  static searchCountry(keyword) {
    return fetch(`https://restcountries.com/v3.1/name/${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson) {
            return Promise.resolve(responseJson);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;