let x = -80;
var gif;
var gif2;
var right;

function setup() {
  var right = true;
  createCanvas(500, 500);
  gif = loadGif('Pokeball_Rolling_Other_Way.gif');
  gif2 = loadGif('Pokeball_Rolling.gif');
}


function draw() {
  background(0);
  if (mouseIsPressed) {
    move();
  }
  if (right) {
    image(gif, x, 420, gif.width / 2, gif.height / 2);
  } else {
    image(gif2, x, 420, gif.width / 2, gif.height / 2);
  }
  if (x == -81 || x == 580) {
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
