'use strict';

const container = document.querySelector('.countries_container');

// XML HTTP REQUEST
const showHtml = function (dataObj) {
  const countryHtml = `
    <div class="country_card">
      <div class="flag">
        <img src="${dataObj.flags.png}" />
      </div>
      <div class="data_container">
        <h3 class="name">${dataObj.name.common}</h3>
        <h4 class="region">${dataObj.region}</h4>
        <p class="row">${dataObj.capital[0]}</p>
        <p class="row">${Object.values(dataObj.languages)[0]}</p>
        <p class="row">${dataObj.population.toLocaleString()}</p>
      </div>
    </div>
`;

  container.insertAdjacentHTML('beforeend', countryHtml);
};

/* const getCountry = function (countryName) {
  const request = new XMLHttpRequest(); // Old way
  request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();
  request.addEventListener('load', function () {
    const [dataObj] = JSON.parse(this.responseText);
    console.log(dataObj);

    showHtml(dataObj);

    const borderCountries = dataObj.borders;
    if (!borderCountries.length) return;
    const requestBorders = new XMLHttpRequest(); // Old way
    requestBorders.open(
      'GET',
      `https://restcountries.com/v3.1/alpha?codes=${borderCountries}`
    );
    requestBorders.send();
    requestBorders.addEventListener('load', function () {
      const bordersData = JSON.parse(this.responseText);
      console.log(bordersData);
      bordersData.forEach(border => showHtml(border));
    });
  });
};

getCountry('italy');
// getCountry('germany');
// getCountry('mexico'); */

//-----// Promises and Fetch //-----//

// const request = fetch(`https://restcountries.com/v3.1/name/turkey`);
// console.log(request);

const handleFetchdata = function (endpoint, errorMessage) {
  return fetch(endpoint).then(response => {
    console.log(response);
    if (!response.ok) throw new Error(errorMessage);
    return response.json();
  });
};

const getCountry = function (countryName) {
  const request = handleFetchdata(
    `https://restcountries.com/v3.1/name/${countryName}`,
    'Country not found!'
  )
    .then(data => {
      showHtml(data[0]);
      const borderCountries = data[0].borders;
      //   const borderCountries = ['adad'];
      if (!borderCountries) throw new Error('There is no border country!');
      return handleFetchdata(
        `https://restcountries.com/v3.1/alpha?codes=${borderCountries}`,
        'Country not found!'
      );
    })
    .then(data => data.forEach(element => showHtml(element)))
    .catch(error => {
      console.log(`Oops, something went wrong. ${error}`);
      showError(`Oops, something went wrong. ${error.message}`);
    })
    .finally(() => console.log('Always'));
};

const showError = function (errorMessage) {
  container.insertAdjacentText('beforeend', errorMessage);
};

getCountry('iceland');
