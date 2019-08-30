var colors = generateRandomColors(6);
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for(i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function (){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "CORRECT!";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323"
      messageDisplay.textContent = "TRY AGAIN";
    }
  });
}

function changeColors(color){
  //loop through all squares
  for(i = 0; i < squares.length; i++){
    //change each color to match winner
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  // make an array
  var arr = []
  // repeat num times
  for(var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor() {
  //pick a "red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}