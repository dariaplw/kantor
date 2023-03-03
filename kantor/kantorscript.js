let FormElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateUSD = 39.7;
let rateEUR = 42;
let rateGBP = 43.9;
let ratePLN = 8.2;

FormElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
        case "PLN":
            result = amount / ratePLN;
            break;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} UAN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});