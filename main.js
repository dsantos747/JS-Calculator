// Javascript Calculator

// Fix negative symbol in right hand side
// Add themes!

const updateMain = (a = "") => {
  if (mainNum == "0") {
    mainNum = mainNum.toString().replace(/^0+/, a);
  } else {
    mainNum += a;
  }
  mainNumObj.textContent = mainNum;
};

// Function to perform mathematical operations
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

// Function for most maths operations
const mathOp = (op = "") => {
  topNum = operation(lastOp);
  mainNum = 0;
  topNumObj.textContent = topNum;
  mainNumObj.textContent = mainNum;
  lastOp = op;
};

// Function for totalling
const equals = () => {
  mainNum = operation(lastOp);
  topNum = 0;
  topNumObj.textContent = topNum;
  mainNumObj.textContent = mainNum;
  lastOp = "+";
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
    button.click();
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

// Prevent rmb menu on mobile when holding over light sensor
const lightSensor = document.getElementById("light-sensor");
lightSensor.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// Theme selector
const styleRoot = document.documentElement;
const themeArr = ["Hocus Pocus Calculus", "CAL 9000"];
let themeIndex = 0;
const themeButton = document.getElementById("theme");

function updateText() {
  themeButton.textContent = themeArr[themeIndex];

  switch (themeArr[themeIndex]) {
    case "Hocus Pocus Calculus":
      styleRoot.style.setProperty("--color-0-1", "#686554");
      styleRoot.style.setProperty("--color-0-2", "#1A1712");
      styleRoot.style.setProperty("--color-1-1", "#ee8833");
      styleRoot.style.setProperty("--color-1-2", "#83440f");
      styleRoot.style.setProperty("--color-2-1", "#333333");
      styleRoot.style.setProperty("--color-3-1", "#38a842");
      styleRoot.style.setProperty("--color-3-2", "#226d28");
      styleRoot.style.setProperty("--color-4-1", "#ab6de6");
      styleRoot.style.setProperty("--color-4-2", "#68328b");
      styleRoot.style.setProperty("--color-5-1", "#000000");
      styleRoot.style.setProperty("--color-5-2", "#ffffff");
      styleRoot.style.setProperty("--color-6-1", "#ddffcc");
      styleRoot.style.setProperty("--color-6-2", "#829678");
      break;
    case "CAL 9000":
      styleRoot.style.setProperty("--color-0-1", "#d12d2d");
      styleRoot.style.setProperty("--color-0-2", "#090916");
      styleRoot.style.setProperty("--color-1-1", "#608788");
      styleRoot.style.setProperty("--color-1-2", "#32484b");
      styleRoot.style.setProperty("--color-2-1", "#f5dfee");
      styleRoot.style.setProperty("--color-3-1", "#cecece");
      styleRoot.style.setProperty("--color-3-2", "#7d7d7d");
      styleRoot.style.setProperty("--color-4-1", "#25b9d7");
      styleRoot.style.setProperty("--color-4-2", "#166b7c");
      styleRoot.style.setProperty("--color-5-1", "#000000");
      styleRoot.style.setProperty("--color-5-2", "#ffffff");
      styleRoot.style.setProperty("--color-6-1", "#d12d2d");
      styleRoot.style.setProperty("--color-6-2", "#3b0808");
      break;
  }
}

themeButton.addEventListener("click", function () {
  themeIndex++;

  if (themeIndex >= themeArr.length) {
    themeIndex = 0;
  }

  updateText();
});

// Initial Page Setup
updateText();

var lastOp = "+";

var mainNum = "0";
const mainNumObj = document.getElementById("main-num");
mainNumObj.textContent = mainNum;

var topNum = "0";
const topNumObj = document.getElementById("top-num");
topNumObj.textContent = topNum;
