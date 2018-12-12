var x=0;
var lox=0;
var img;
var bg;
var img2;

function preload(){
img = loadImage('images/butterfly.png');
img2 = loadImage('images/PplWalking.png');
bg = loadImage('images/Art3ProjectBG.png');
}

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  image(bg,0,0);

  //butterflies BW/color
  push();
  translate(lox, 150);
  if(lox<500){
      //tint(128,128,128);
      tint(108,108,108);
  }
  if(lox>500){
      noTint();
  }
  image(img,50,-25,50,50);
  image(img,0,0,50,50);
  image(img,0,-50,50,50);
  image(img,-50,0,50,50);
  image(img,-50,-50,50,50);
  image(img,-100,-25,50,50);
  if (lox > width) {
    lox = 0;
  }
  lox++;
  pop();

//ppl bw/color
push();
translate(lox,0);
if(lox<500){
      tint(108,108,108);
}
if(lox>500){
    noTint();
}

image(img2,-100,340,200,200);
if (lox > width) {
  lox = 0;
}
pop();
}
