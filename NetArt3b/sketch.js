let x = -80;
var gif;
var jpg;
var right;

//Have a pokeball have your name and the other have your sister's name. Then have your sister's ball roll off screen while your ball stays!
function preload() {
  jpg = loadImage('Pokeball.png');
}

function setup() {
  createCanvas(500, 500);
  gif = loadGif('Pokeball_Rolling_Other_Way.gif');
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    move();
  }
  if (right) {
    image(gif, x, 420, gif.width / 2, gif.height / 2);
  }
  if (x == -81 || x == 580) {
    right = !right;
  }

  function move() {
    if (right) {
      x++;
    }
  }
