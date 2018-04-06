let x = -80;
let poke1;
let poke2;
let right;

//Have a pokeball have your name and the other have your sister's name. Then have your sister's ball roll off screen while your ball stays!
function preload() {
  poke1 = loadImage('Pokeball.png');
}

function setup() {
  createCanvas(500, 500);
  poke2 = loadGif('Pokeball_Rolling_Other_Way.gif');
}
//
// function draw() {
//   background(0);
//   if (mouseIsPressed) {
//     move();
//   }
//   if (right) {
//     image(poke2, x, 420, gif.width / 2, gif.height / 2);
//   }
//   if (x == -81 || x == 580) {
//     right = !right;
//   }
//
//   function move() {
//     if (right) {
//       x++;
//     }
//   }
