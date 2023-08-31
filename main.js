// Javascript Calculator

const updateMain = (a = "") => {
  //Here should push a to the end of the string currently in mainNum. However, we are currently working with numbers - might have to do some string / number conversion
  if (mainNum == "0") {
    mainNum = mainNum.toString().replace(/^0+/, a);
  } else {
    mainNum += a;
  }
  mainNumObj.textContent = mainNum;
};

const operation = (op = "") => {
  let a = Number(topNum);
  let b = Number(mainNum);

  switch (op) {
    case "+":
      return String(a + b);
    case "-":
      return String(a - b);
    case "*":
      return String(a * b);
    case "/":
      return String(a / b);
    case "pow":
      return String(Math.pow(a, b));
    case "root":
      return String(Math.pow(a, 1 / b));
    case "+/-":
      return String(b * -1);
  }
};

// Function for totalling
const equals = () => {
  mainNum = operation(lastOp);
  topNum = 0;
  topNumObj.textContent = topNum;
  mainNumObj.textContent = mainNum;
  lastOp = "+";
};

// Function for addition
const add = () => {
  topNum = operation(lastOp);
  mainNum = 0;
  topNumObj.textContent = topNum;
  mainNumObj.textContent = mainNum;
  lastOp = "+";
};

// Function for subtration
const subtract = () => {
  topNum = operation(lastOp);
  mainNum = 0;
  topNumObj.textContent = topNum;
  mainNumObj.textContent = mainNum;
  lastOp = "-";
};

// Function for multiplication
const multiply = () => {
  topNum = operation(lastOp);
  mainNum = 0;
  topNumObj.textContent = topNum;
  mainNumObj.textContent = mainNum;
  lastOp = "*";
};

// Function for division
const divide = () => {
  topNum = operation(lastOp);
  mainNum = 0;
  topNumObj.textContent = topNum;
  mainNumObj.textContent = mainNum;
  lastOp = "/";
};

// Function for taking a to the the power of b
const power = () => {
  topNum = operation(lastOp);
  mainNum = 0;
  topNumObj.textContent = topNum;
  mainNumObj.textContent = mainNum;
  lastOp = "pow";
};

// Function for getting the b root of a
const root = () => {
  topNum = operation(lastOp);
  mainNum = 0;
  topNumObj.textContent = topNum;
  mainNumObj.textContent = mainNum;
  lastOp = "root";
};

// Function for multiplying entry by -1
const inverse = () => {
  mainNum = operation("+/-");
  topNumObj.textContent = topNum;
  mainNumObj.textContent = mainNum;
};

// Function to clear entry
const clearEntry = () => {
  mainNum = "0";
  mainNumObj.textContent = mainNum;
};

// Function to clear all
const clearAll = () => {
  topNum = "0";
  mainNum = "0";
  topNumObj.textContent = topNum;
  mainNumObj.textContent = mainNum;
};

// Function to simulate button click
function simulateButtonClick(buttonId) {
  var button = document.getElementById(buttonId);
  if (button) {
    button.click(); // Trigger the button's click event
  }
}

// Event listener for key presses
document.addEventListener("keydown", function (event) {
  var keyPressed = event.key;

  if (event.shiftKey && keyPressed === "8") {
    keyPressed = "*";
  }

  // Map keys to button IDs
  var keyButtonMap = {
    "1": "but_1",
    "2": "but_2",
    "3": "but_3",
    "4": "but_4",
    "5": "but_5",
    "6": "but_6",
    "7": "but_7",
    "8": "but_8",
    "9": "but_9",
    "0": "but_0",
    ".": "but_dot",
    "Escape": "but_AC",
    "Backspace": "but_CE",
    "+": "but_add",
    "-": "but_sub",
    "*": "but_mul",
    "SHIFT+8": "but_mul",
    "/": "but_div",
    "Enter": "but_equals",
  };

  var buttonId = keyButtonMap[keyPressed];
  if (buttonId) {
    simulateButtonClick(buttonId);
  }
});

// Prevent "Enter" from activating last selected button
document.getElementById("keypad-form").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

var lastOp = "+";

var mainNum = "0";
const mainNumObj = document.getElementById("main-num");
mainNumObj.textContent = mainNum;

var topNum = "0";
const topNumObj = document.getElementById("top-num");
topNumObj.textContent = topNum;
