//Examples of Arrays!
//Example 1:
// let student0 = "Natalie";
// let student1 = "Calvin";
// let student2 = "Victoria";
//
// let students = ["Natalie", "Calvin", "Victoria"]
// function setup () {
//   console.log(students);
//   console.log(students[2]);
// }

//Example 2:
// let students = []
// function setup(){
//   students[0] = "Jacqueline";
//   students[1] = "Monica";
//
//   console.log(students);
//   console.log(students[2]);
// }

//Example 3:
// let students = []
// function setup(){
//   students[0] = "Jacqueline";
//   students[1] = "Monica";
//
//   students.push("Andy");
//
// console.log(students);
//
//   students.shift();
//
//   students[1] = "Mona";
//
//   console.log(students);
//   console.log("student at index 2 is " + students[1]);
// }

//Example 4:
// let multiples0f3 = []
//
// function setup() {
//   for (let i = 0; i < 503; i++) {
//     multiples0f3[i] = i * 3
//   }
//
//   console.log(multiples0f3);
// }

//Exmaple 5:
// let students = []
//
// function setup() {
//   students[0] = "Jacqueline";
//   students[1] = "Monica";
//
//   students.push("Andy");
//   students.push("Handy");
//   students.push("Sandy");
//   students.push("Dandy");
//   students.push("Mandy");
//   students.push("Randy");
//   students.push("Candy");
//
// for (i = 0; i < students.length; i++){
//     console.log(`${students[i]} is a great student.`);
// }

//Examples of Objects!
//Example 1:
// let array0f0bjects = [{}, {}, {}]
//
// let students = [{
//     firstName: "Cool",
//     lastName: "Breeze",
//     year: "Sophomore",
//   },
//   {
//     firstName: "Silent",
//     lastName: "Moon",
//     year: "Senior",
//   },
//   {
//     firstName: "Ugly",
//     lastName: "Curtain",
//     year: "Junior",
//   },
//   {
//     firstName: "Fluffy",
//     lastName: "Tail",
//     year: "Junior",
//   },
// ];
//
// function setup() {
//
//   for (i = 0; i < students.length; i++) {
//     console.log(i + ": " + students[i].firstName + " " + students[i].lastName);
//     console.log("class roster");
//   }

//Example: Array of Rectangles
// let rectangles = [];
//
// function setup() {
//   createCanvas(500, 500);
//
// }
//
// function mousePressed() {
//
//   rectangles.push({
//     posX: mouseX,
//     posY: mouseY,
//     color: random(255),
//     size: random(50, 200),
//     speed: random(5)
//   });
//
//   console.log(rectangles);
// }
//
// function draw() {
//   background(100, 200, 100);
//
//   for (let i = 0; i < rectangles.length - 1; i > 0; i++) {
//     fill(rectangles[i].color);
//     rect(rectangles[i].posX, rectangles[i].posY, rectangles[i].size, rectangles[i].size);
//
//     rectangles[i].posY += rectangles[i].speed;
//
//     if (rectangles[i].posY >= height + 200) {
//       rectangles.splice(i, 1);
//   }
// }
// }

//Extra Example: DOM DEMO
