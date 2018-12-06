// NTS : Build separate functions for evaluating user input and return error if wrong..

let inputStorage = "";
let result = 0;

const display = document.querySelector(".h2_display");

const nums = document.querySelectorAll(".num");
nums.forEach(num =>
  num.addEventListener("click", () => {
    // Populates display / valuestorage with numbers
    inputStorage += num.textContent;
    display.textContent += num.textContent;
  })
);

const backspacebt = document.querySelector(".bspace");
backspacebt.addEventListener("click", () => backspace());

const operators = document.querySelectorAll(".operator");
operators.forEach(oper => {
  oper.addEventListener("click", () => {
    inputStorage += oper.textContent;
    display.textContent += oper.textContent;
  });
});

const equalsbtn = document.querySelector(".equals");
equalsbtn.addEventListener("click", () => {
  evaluateInput();
  
});

const clearbtn = document.querySelector(".clearbtn");
clearbtn.addEventListener("click", () => {
  clear();
});

// clear display , clear values
function clear() {
  display.textContent = "";
  inputStorage = "";
}

function backspace() {
  if (typeof inputStorage === "number") {
    // If user clicked equals (result as number) then work as clear function
    clear();
  } else {
    inputStorage = inputStorage.slice(0, inputStorage.length - 1);
    display.textContent = display.textContent.slice(
      0,
      display.textContent.length - 1
    );
  }
}

// Works like a "transit" to calculate(). Errorchecking before invoking calculate
function evaluateInput() {
  const correctInput = inputStorage.match(/^(\d+[\+\-\*\/\.]{1})+\d+$/);
  if (!correctInput) {
    display.textContent = "Error";
    inputStorage = "";
    return;
  } else {
    calculate();
  }
}

// Basic functionality
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function prettyResult(aStr) {
  // IDK yet what to do with this function
}

// Function flow controls where to route the call depending on operator value in global function.


function calculate() {
  const splitInput = inputStorage.split(/([-+/*])/gi);

  for (let i = 0; i < splitInput.length; i++) {
    if (splitInput.includes("+", 0)) {
      result = add(parseFloat(splitInput[0]), parseFloat(splitInput[2]));
      display.textContent = result.toFixed(2);
      inputStorage = result;
    }
    if (splitInput.includes("-", 0)) {
      result = subtract(parseFloat(splitInput[0]), parseFloat(splitInput[2]));
      display.textContent = result.toFixed(2);
      inputStorage = result;
    }
    if (splitInput.includes("*", 0)) {
      result = multiply(parseFloat(splitInput[0]), parseFloat(splitInput[2]));
      display.textContent = result.toFixed(2);
      inputStorage = result;
    }
    if (splitInput.includes("/", 0)) {
      result = divide(parseFloat(splitInput[0]), parseFloat(splitInput[2]));
      display.textContent = result.toFixed(2);
      inputStorage = result;
    }
  }
}
