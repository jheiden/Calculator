// NTS : Build separate functions for evaluating user input and return error if wrong..

let inputStorage = "";
let result = 0;

const displayWindow = document.querySelector(".display")
const display = document.querySelector(".h2_display");
const buttonwrap = document.querySelector(".buttonwrap");
buttonwrap.addEventListener("click", getInput, false); // Eventlistener on grid container.
window.addEventListener("keydown", onKeyPress);

function getInput(event) {
  if (event.target !== event.currentTarget) {
    // Avoid running any code if parent is clicked.
    if (event.target.textContent === "CLEAR") {
      clear();
    } else if (event.target.textContent === "DEL") {
      backspace();
    } else if (event.target.textContent === "=") {
      evaluateInput();
    } else {
      detectAndInvoke();
      inputStorage += event.target.textContent;
      display.textContent += event.target.textContent;
    }
  }
  event.stopPropagation();
}

function getKeyboardInput(val) {
  inputStorage += val;
  display.textContent += val;
}

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

// Works like a "transit" to calculate(). Checking for invalid input prior to invoking calculate.
function evaluateInput() {
  const correctInput = inputStorage.match(/^(\d+[\+\-\*\/\.]{1})+\d+$/);
  if (!correctInput) {
    // ** Insert transition here **
    display.textContent = "Error";
    // displayWindow.classList.add("error");
    inputStorage = "";
    return;
  } else {
    calculate();
  }
}

function detectAndInvoke() {
  if (typeof inputStorage === "number") {
    return;
  }
  inputStorage.match(/\d[\+\-\*\/]\d/) ? calculate() : null;
}

// Basic functionality
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Function flow controls where to route the call depending on operator value in global function.
function calculate() {
  const splitInput = inputStorage.split(/([-+/*])/gi);
  const numA = parseFloat(splitInput[0]);
  const numB = parseFloat(splitInput[2]);

  // Splits string into array => convert numerical to floats => storing numbers in separate variables.
  if (splitInput.includes("+")) {
    result = add(numA, numB);
    display.textContent = result.toFixed(2);
    inputStorage = result;
  }
  if (splitInput.includes("-")) {
    result = subtract(numA, numB);
    display.textContent = result.toFixed(2);
    inputStorage = result;
  }
  if (splitInput.includes("*")) {
    result = multiply(numA, numB);
    display.textContent = result.toFixed(2);
    inputStorage = result;
  }
  if (splitInput.includes("/")) {
    result = divide(numA, numB);
    display.textContent = result.toFixed(2);
    inputStorage = result;
  }
}

function onKeyPress(event) {
  switch (event.key) {
    case "Enter":
      calculate();
      break;
    case "+":
      getKeyboardInput(event.key);
      break;
    case "-":
      getKeyboardInput(event.key);
      break;
    case "*":
      getKeyboardInput(event.key);
      break;
    case "/":
      getKeyboardInput(event.key);
      break;
    case "Backspace":
      backspace();
      break;
    case ".":
      getKeyboardInput(event.key);
      break;
    case "0":
      getKeyboardInput(event.key);
      break;
    case "1":
      getKeyboardInput(event.key);
      break;
    case "2":
      getKeyboardInput(event.key);
      break;
    case "3":
      getKeyboardInput(event.key);
      break;
    case "4":
      getKeyboardInput(event.key);
      break;
    case "5":
      getKeyboardInput(event.key);
      break;
    case "6":
      getKeyboardInput(event.key);
      break;
    case "7":
      getKeyboardInput(event.key);
      break;
    case "8":
      getKeyboardInput(event.key);
      break;
    case "9":
      getKeyboardInput(event.key);
      break;
  }
}
