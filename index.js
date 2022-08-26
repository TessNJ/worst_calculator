//Setting up
"use strict";

let firstValue;
let secondValue;
let resultValue;
let operatorID;
let operatorResult;
let newResult;

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
  //   console.log(operatorResult);
  calculateValue();
}

//Calculat (+, -, *, /)
function calculateValue() {
  newResult = firstValue + operatorResult + secondValue;
  newResult = eval(newResult);
  //   console.log(newResult);
  printValue();
}
//Check if rounded clicked

//If Yes the Round (If no skip)

//Write result in first input field
function printValue() {
  document.getElementById("firstnumber").value = newResult;
  listResult();
}
//Append result to list
function listResult() {
  document.querySelector("#results :nth-child(4)").textContent = newResult;
  console.log("works ?");
}
//Scroll list to last 4 results

////////////////************/////////////////////

//Clickable again

//Clicks "clear"
//Clear List (keep result in input)

//Clickable again
