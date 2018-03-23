let img;

function preload() {
  // you will need to change this to the file path to your image
  img = loadImage('superMarioClouds_0.png');
}

function setup() {
  createCanvas(800, 800);
  background(200);

  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  image(img, 0, 0);

  // If you want to scale the image to 100 x 100 pixels
  // image(img, 0, 0, 100, 100);

  // If you want to scale image by 50%
  // image(img, 10, 10, img.width/2, img.height/2);
}

// function draw() {
// 	if (mouseIsPressed) {
// 		fill(10, 100, 200);
// 		ellipse(mouseX, mouseY, 80, 80);
// 	} else {
// 		fill(255, 100, 50);
// 		rectMode(CENTER);
// 		rect(mouseX, mouseY, 80, 80);
// 	}
// }
