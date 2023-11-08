//Defining the variables required
let amount = document.getElementById("amount");
let firstSelectedElement = document.getElementById("from");
let secondSelectedElement = document.getElementById("to");
let button = document.getElementById("btn");
let result = document.getElementById("results");

//1.00 Kenyan Shilling = 0.0066030587 US Dollars
//1.00 Kenyan Shilling = 0.0053705166 British Pounds
//1.00 US Dollar = 0.81358576 British Pounds
//1.00 US Dollar = 151.51429 Kenyan Shillings
//1.00 British Pound = 186.22116 Kenyan Shillings
//1.00 British Pound = 1.2292301 US Dollars

function shillingToDollar() {
  let firstShilling = firstSelectedElement.value;
  let firstDollar = secondSelectedElement.value;
  let amountStored = Number(amount.value);
  let convertedValue = amountStored * 0.0066030587;
  if (firstShilling === "shillings" && firstDollar === "dollars") {
    result.innerHTML += `
  <div>
  <p> ${amountStored}.00 Kenyan Shillings = ${convertedValue} US Dollars
  </div>
  `;
  }
}

function shillingToPound() {
  let secondShilling = firstSelectedElement.value;
  let firstPound = secondSelectedElement.value;
  let secondAmountStored = Number(amount.value);
  let secondConvertedValue = secondAmountStored * 0.0053705166;
  if (secondShilling === "shillings" && firstPound === "pounds") {
    result.innerHTML += `
  <div>
  <p> ${secondAmountStored}.00 Kenyan Shillings = ${secondConvertedValue} British Pounds
  </div>
  `;
  }
}

button.addEventListener("click", shillingToDollar);
button.addEventListener("click", shillingToPound);
