var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setUpSquares();
  resetCol();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
  
      this.classList.add("selected");
      // the following line is the same as the if else statement below\
      //  checks if clicked button text conten = "Easy" then assignes 3
      //   to numSquares otherwise assigns 6
      // this.textContent === "easy" ? numSquares = 3 : numSquares = 6;

      if (this.textContent === "easy") {
        numSquares = 3;
      } else if (this.textContent === "medium") {
        numSquares = 6;
      } else if (this.textContent === "hard") {
        numSquares = 9;
      }
      resetCol();
    });
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].addEventListener("click", function() {
      // grab the color of the picked squar
      var clickedColor = this.style.backgroundColor;
      // comapre color to picked color
      if (clickedColor === pickedColor) {
        reset.textContent = "Play again";
        message.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323"
        message.textContent = "Try Again"
      }
    });
  }
}

reset.addEventListener("click", resetCol);

function changeColors(color) {
  // loop through all squres
  for (var i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = parseInt(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = []
  // add num random colors to arr
  for (var i = 0; i < num; i++) {
    // get random color and push trow array
    arr.push(randomColor());
  }
  //  return that array
  return arr;
}

function randomColor() {
  //  pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  //  pick a green from 0-255
  var g = Math.floor(Math.random() * 256);
  //  pick a blue from 0-255
  var b = Math.floor(Math.random() * 256);
  // make the random RGB from the thre random nums
  var rGB = "rgb(" + r + ", " + g + ", " + b + ")";
  return rGB;
}

function resetCol() {
  reset.textContent = "New Colors";
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from the array to guess
  pickedColor = pickColor();
  // change the color of the display to picked color
  colorDisplay.textContent = pickedColor;
  reset.textContent = "New Colors"
  message.textContent = "";
  // change colors of squers
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
}
 