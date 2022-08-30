//Setting up
"use strict";

let firstValue;
let secondValue;
let resultValue;
let operatorID;
let operatorResult;
let newResult;
let ul = document.getElementById("results");
let liCreate;
let liId;
let roundedValue;
let roundedId;
let roundedAmount;
let liPlace;

//Click "Calculate"
//Read first number
function readFirst() {
  firstValue = document.getElementById("firstnumber").value;
  //   console.log(firstValue);
  readSecond();
}
//Read second number
function readSecond() {
  secondValue = document.getElementById("secondnumber").value;
  //   console.log(secondValue);
  readOperator();
}
//Read operator
function readOperator() {
  operatorID = document.getElementById("operator");
  operatorResult = operatorID.options[operatorID.selectedIndex].text;
  console.log(operatorResult);
  calculateValue();
}

//Calculat (+, -, *, /)
function calculateValue() {
  newResult = firstValue + operatorResult + secondValue;
  newResult = eval(newResult);
  // printValue();
  roundCheck();
}
//Check if rounded clicked
function roundCheck() {
  roundedValue = document.querySelector("#doround");
  if (roundedValue.checked === true) {
    roundDo();
  } else {
    printValue();
  }
}

//If Yes the Round (If no skip)
function roundDo() {
  roundedId = document.getElementById("decimals");
  roundedAmount = roundedId.options[roundedId.selectedIndex].text;
  newResult = newResult.toFixed(roundedAmount);
  // console.log(newResult);
  printValue();
}

//Write result in first input field
function printValue() {
  document.getElementById("firstnumber").value = newResult;
  listResult();
}
//Append result to list
function listResult() {
  liCreate = document.createElement("li");
  liCreate.textContent = newResult;
  ul.appendChild(liCreate);
  listScroll();
}
//Scroll list to last 4 results
function listScroll() {
  ul.scrollTop = liCreate.offsetTop - 50;
}
////////////////************/////////////////////

//Clicks "clear"
document.querySelector("#clear").addEventListener("click", clearList);
//Clear List (keep result in input)
function clearList() {
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
}

// function removeHere() {
//   ul.removeChild(ul.lastElementChild);
// }
