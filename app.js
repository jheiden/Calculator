// NTS : Build separate functions for evaluating user input and return error if wrong..

let inputStorage = "";
let result = 0;

const display = document.querySelector(".h2_display");

// TODO ** Add propagation and bubbling => remove separate eventListeners **

const buttonwrap = document.querySelector(".buttonwrap");
buttonwrap.addEventListener("click", getInput, false);

// The eventlistener. Will be called each time the buttonwrap element is clicked (and also children contained in..)
// We only need click events on children so the if statement prevents code from being run if event click is from the eventlistener target
// target of event = event.target, target for eventlistener = event.currentTarget.

function getInput(event) {
    
    if (event.target.textContent === "CLEAR") {
      clear();
    } else if (event.target.textContent === "DEL") {
      backspace();
    } else if (event.target.textContent === "=") {
      calculate();
    } else {
    inputStorage += event.target.textContent;
    display.textContent += event.target.textContent;
  }
     event.stopPropagation();
}



window.addEventListener("keydown", event => {
  console.log(event.key);

  let currentKey = event.key.toString();
  //display.textContent = currentKey;

  // if (event.key === 'a') {
  //   alert(event.key)
  // }
  // return;
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

// Works like a "transit" to calculate(). Checking for invalid input prior to invoking calculate
function evaluateInput() {
  const correctInput = inputStorage.match(/^(\d+[\+\-\*\/\.]{1})+\d+$/);
  if (!correctInput) {
    // ** Insert transition here **
    display.textContent = "Error";
    inputStorage = "";
    return;
  } else {
    calculate();
  }
}

function detectAndInvoke() {
  // * Invoke this function at given keypress => if function detects 2 operators => invoke calculate. If false => return..
  // triggered at buttonclicks.
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
