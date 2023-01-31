// you can find the API docs on: https://restcountries.com/

//Base URL: https://restcountries.com/v2/

//==================================================
//getting all the countries:
//API URL: https://restcountries.com/v2/all

const fetchAllCountries = async () => {
  try {
    let response = await fetch("https://restcountries.com/v2/all");
    let data = await response.json();

    //    console.log(data)
  } catch (err) {
    console.log(err);
  }
};

fetchAllCountries();

//=======================================================
//getting one country by name:
// API URL: https://restcountries.com/v2/name/${name}

const userInput = document.querySelector("#userInput");
const form = document.querySelector("form");
const h1 = document.querySelector("h1");
const img = document.querySelector("img");
const population = document.querySelector("#population");
const area = document.querySelector("#area");
const region = document.querySelector("#region");
const capital = document.querySelector("#capital");

async function fetchCountryByName(e) {
  e.preventDefault();

  try {
    let response = await fetch(
      `https://restcountries.com/v2/name/${userInput.value}`
    );
    let data = await response.json();

    console.log(data[0]);

      h1.innerText = data[0].name;
      img.src = data[0].flags.png;
      population.innerText = data[0].population;
      area.innerText = data[0].area;
      region.innerText = data[0].region;
      capital.innerText = data[0].capital;

  } catch (err) {
    console.log(err);
  }
}

form.addEventListener("submit", fetchCountryByName);

// fetch using the .then() syntax:

fetch("https://api.coinconvert.net/convert/eth/eur?amount=10")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
