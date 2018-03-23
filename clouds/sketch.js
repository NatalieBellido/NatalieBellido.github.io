let clouds;
let clouds2;
let x = 0;
let speed = 5;


function preload() {
  clouds = loadImage('superMarioClouds_0.png');
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200);
  image(clouds, x, 10, clouds.width / 2, clouds.height / 2);
  image(clouds, x, 150, clouds.width / 1, clouds.height / 1);
  if (mouseIsPressed) {
    move();
  }
}


function move() {
  x = x + speed;
  //x++;
  if (x > width - 150 || x < -30) {
    speed = -speed;
  }
}
