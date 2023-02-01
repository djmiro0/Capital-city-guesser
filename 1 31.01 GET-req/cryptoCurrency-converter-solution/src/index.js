// import "./css/style.css"; //importing css

const cryptoSelect = document.querySelector(".cryptoSelect");
const inputAmount = document.querySelector("#inputAmount");
const fiatCurrencySelect = document.querySelector(".fiatCurrencySelect");
const form = document.querySelector("#conversion-form");
const output = document.querySelector("#output");

const registerEvents = async () => {
  try {
    let response = await fetch(
      `https://api.coinconvert.net/convert/${cryptoSelect.value}/${fiatCurrencySelect.value}?amount=${inputAmount.value}`
    );

    let data = await response.json();
    console.log(data);

    output.value = data[fiatCurrencySelect.value.toUpperCase()];
    //             data["EUR"] === data.EUR
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  registerEvents();
});
