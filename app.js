// NTS : Build separate functions for evaluating user input and return error if wrong..

let arrayValues = [];

const display = document.querySelector(".h2_display");

const nums = document.querySelectorAll(".num");
nums.forEach(num =>
  num.addEventListener("click", () => {
    populateArray(num.textContent);
    activateDisplay(num.textContent);
  })
);

const operators = document.querySelectorAll(".operator");
operators.forEach(oper => {
  oper.addEventListener("click", () => {
    populateArray(oper.textContent);
    activateDisplay(oper.textContent);
  });
});

const equalsbtn = document.querySelector(".equals");
equalsbtn.addEventListener("click", () => calculate(arrayValues));

const backspacebt = document.querySelector(".bspace");
backspacebt.addEventListener("click", () => {
  if (arrayValues.length === 0) {
    return arrayValues.length = 0;
  } else {
    arrayValues.length = arrayValues.length - 1;
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
  }
});

const clearbtn = document.querySelector(".clearbtn");
clearbtn.addEventListener("click", () => {
  clearAll();
});

// Basic functionality
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function activateDisplay(param) {
  display.textContent += param;
  if (param === "+" || param === "-" || param === "*" || param === "/") {
    display.textContent = "";
  }
}

function populateArray(items) {
  arrayValues.push(items);
}

// called when EQUAL is hit
function calculate() {
  let result = eval(arrayValues.join(""));
  display.textContent = result
  arrayValues = [result];
  //calculate new display value from input ARR
  //update ui
  //input ARR should be empty at this point
}

function clearAll () {
  display.textContent = "";
  arrayValues.length = 0;

}

