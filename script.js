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

function dollarToShilling() {
  let secondDollar = firstSelectedElement.value;
  let thirdShilling = secondSelectedElement.value;
  let thirdAmountStored = Number(amount.value);
  let thirdConvertedValue = thirdAmountStored * 151.51429;
  if (secondDollar === "dollars" && thirdShilling === "shillings") {
    result.innerHTML += `
  <div>
  <p> ${thirdAmountStored}.00 US Dollars = ${thirdConvertedValue} Kenyan Shillings
  </div>
  `;
  }
}

function dollarToPound() {
  let thirdDollar = firstSelectedElement.value;
  let secondPound = secondSelectedElement.value;
  let fourthAmountStored = Number(amount.value);
  let fourthConvertedValue = fourthAmountStored * 0.81358576;
  if (thirdDollar === "dollars" && secondPound === "pounds") {
    result.innerHTML += `
  <div>
  <p> ${fourthAmountStored}.00 US Dollars = ${fourthConvertedValue} British Pounds
  </div>
  `;
  }
}

function poundToDollar() {
  let thirdPound = firstSelectedElement.value;
  let fourthDollar = secondSelectedElement.value;
  let fifthAmountStored = Number(amount.value);
  let fifthConvertedValue = fifthAmountStored * 1.2292301;
  if (thirdPound === "pounds" && fourthDollar === "dollars") {
    result.innerHTML += `
  <div>
  <p> ${fifthAmountStored}.00 British Pounds = ${fifthConvertedValue} US Dollars
  </div>
  `;
  }
}

function poundToShilling() {
  let fourthPound = firstSelectedElement.value;
  let fourthShilling = secondSelectedElement.value;
  let sixthAmountStored = Number(amount.value);
  let sixthConvertedValue = sixthAmountStored * 186.22116;
  if (fourthPound === "pounds" && fourthShilling === "shillings") {
    result.innerHTML += `
  <div>
  <p> ${sixthAmountStored}.00 British Pounds = ${sixthConvertedValue} Kenyan Shillings
  </div>
  `;
  }
}

function shillingToShilling() {
  let fifthShilling = firstSelectedElement.value;
  let sixthShilling = secondSelectedElement.value;
  let seventhAmountStored = Number(amount.value);
  let seventhConvertedValue = seventhAmountStored * 1;
  if (fifthShilling === "shillings" && sixthShilling === "shillings") {
    result.innerHTML += `
  <div>
  <p> ${seventhAmountStored}.00 Kenyan Shillings = ${seventhConvertedValue}.00 Kenyan Shillings
  </div>
  `;
  }
}

function dollarToDollar() {
  let fifthDollar = firstSelectedElement.value;
  let sixthDollar = secondSelectedElement.value;
  let eighthAmountStored = Number(amount.value);
  let eighthConvertedValue = eighthAmountStored * 1;
  if (fifthDollar === "dollars" && sixthDollar === "dollars") {
    result.innerHTML += `
  <div>
  <p> ${eighthAmountStored}.00 US Dollars = ${eighthConvertedValue}.00 US Dollars
  </div>
  `;
  }
}

function poundToPound() {
  let fifthPound = firstSelectedElement.value;
  let sixthPound = secondSelectedElement.value;
  let ninthAmountStored = Number(amount.value);
  let ninthConvertedValue = ninthAmountStored * 1;
  if (fifthPound === "pounds" && sixthPound === "pounds") {
    result.innerHTML += `
  <div>
  <p> ${ninthAmountStored}.00 British Pounds = ${ninthConvertedValue}.00 British Pounds
  </div>
  `;
  }
}

button.addEventListener("click", shillingToDollar);
button.addEventListener("click", shillingToPound);
button.addEventListener("click", dollarToShilling);
button.addEventListener("click", dollarToPound);
button.addEventListener("click", poundToDollar);
button.addEventListener("click", poundToShilling);
button.addEventListener("click", shillingToShilling);
button.addEventListener("click", dollarToDollar);
button.addEventListener("click", poundToPound);
