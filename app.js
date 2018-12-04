// NTS : Build separate functions for evaluating user input and return error if wrong..

let inputStorage = "";
let result = 0;

const display = document.querySelector(".h2_display");

const nums = document.querySelectorAll(".num");
nums.forEach(num =>
  num.addEventListener("click", () => {
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
  calculate();
  
  });

const clearbtn = document.querySelector(".clearbtn");
clearbtn.addEventListener("click", () => {
  clear();
});

const add = (a,b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


// called when EQUAL is hit
function calculate () {
  const splitInput = inputStorage.split(/([-+/*])/gi)
  if (splitInput.includes('+', 0)) {
    result = add(parseInt(splitInput[0]), parseInt(splitInput[2]));
    console.log(result);
  }
  if (splitInput.includes('-', 0)) {
    result = subtract(parseInt(splitInput[0]), parseInt(splitInput[2]));
    console.log(result);
  }
  if (splitInput.includes('*', 0)) {
    result = multiply(parseInt(splitInput[0]), parseInt(splitInput[2]));
    console.log(result);
  }
  


  
  
  // arrayValues = [result];
  //calculate new display value from input ARR
  //update ui
  //input ARR should be empty at this point
}

function clear () {
  display.textContent = "";
 inputStorage = "";
}

function backspace () {
  inputStorage = inputStorage.slice(0, (inputStorage.length -1));
  display.textContent = display.textContent.slice(0, (display.textContent.length - 1));
}


