let x = 250;
var gif;
var poke;
var right;

function preload() {
  poke = loadImage('Pokeball.png');
}

function setup() {
  var right = true;
  createCanvas(500, 500);
  gif = loadGif('Pokeball_Rolling_Other_Way.gif');
}

function draw() {
  background(0);
  image(poke, 150, 420, gif.width / 2, gif.height / 2);
  if (mouseIsPressed) {
    move();
  }
  if (right) {
    image(gif, x, 420, gif.width / 2, gif.height / 2);
  }
  if (x == 250 || x == 580) {
    right = !right;
  }
}

function move() {
  if (right) {
    x++;
  } else {
    x--;
  }
}
