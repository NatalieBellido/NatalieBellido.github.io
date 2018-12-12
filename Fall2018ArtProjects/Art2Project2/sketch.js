function setup() {
  createCanvas(1090, 610);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(3);
  //room 1
  line(10, 10, 10, 100);
  line(10, 10, 150, 10);

  line(150, 10, 150, 30);
  line(150, 50, 150, 80);

  line(10, 100, 70, 100);
  line(230, 100, 90, 100);

  //room 1 icons
  //blue item icon
  noStroke();
  fill(0, 255, 255);
  ellipse(20, 20, 10, 10);

  //blue square icons
  rect(90, 85, 10, 10);

  //paths
  //right path from room 1 to room 2
  stroke(255);
  strokeWeight(3);
  line(150, 31, 300, 31);
  line(150, 50, 210, 50);
  line(150, 80, 210, 80);

  line(210, 50, 210, 80);
  line(230, 50, 230, 100);

  line(300, 32, 300, 150);
  line(230, 50, 275, 50);

  line(275, 50, 275, 150);
  //foe in right path from room 1 to room 2
  noStroke();
  fill(255, 0, 0);
  ellipse(288, 130, 10, 10);
  ellipse(288, 140, 10, 10);

  //bottom path from room 1 to dead end
  stroke(255);
  strokeWeight(3);
  line(72, 100, 72, 185);
  line(90, 100, 90, 170);

  line(72, 185, 200, 185);
  line(90, 170, 200, 170);
  line(200, 170, 200, 185);
  //foe in dead end path
  noStroke();
  fill(255, 0, 0);
  ellipse(180, 178, 10, 10);

  //room 2
  stroke(255);
  strokeWeight(3);
  line(250, 150, 275, 150);
  line(300, 150, 380, 150);

  line(250, 150, 250, 230);
  line(380, 150, 380, 180);

  line(380, 200, 380, 230);

  line(250, 232, 300, 232);
  line(320, 232, 380, 232);

  //room 2 icons
  //blue item icon
  noStroke();
  fill(0, 255, 255);
  ellipse(320, 180, 10, 10);

  //foe icon
  fill(255, 0, 0);
  ellipse(380, 191, 10, 10);

  //path from room 2 to room 5 (6 lines)
  stroke(255);
  strokeWeight(3);
  line(380, 180, 430, 180);
  line(380, 200, 450, 200);

  line(430, 115, 430, 180);
  line(450, 135, 450, 200);

  line(430, 115, 490, 115);
  line(450, 135, 490, 135);


  //path from room 2 to room 3 (6 lines)
  line(300, 232, 300, 340);
  line(320, 232, 320, 320);

  line(320, 320, 450, 320);
  line(300, 340, 430, 340);

  line(430, 340, 430, 490);
  line(450, 320, 450, 370);

  //room 3
  line(450, 370, 640, 370);
  line(430, 490, 640, 490);
  line(640, 370, 640, 440);
  line(640, 465, 640, 490);

  //room 3 icons
  //red foe
  noStroke();
  fill(255, 0, 0);
  ellipse(500, 455, 10, 10);
  //blue item 1
  fill(0, 255, 255);
  ellipse(520, 480, 10, 10);
  //blue item 2
  ellipse(630, 480, 10, 10);
  //blue trap
  rect(450, 375, 10, 10);

  //room 4 - stairs room without enterance - in middle of map
  stroke(255);
  strokeWeight(3);
  line(50, 330, 250, 330);
  line(50, 530, 250, 530);
  line(50, 330, 50, 530);
  line(250, 330, 250, 530);

  //room 4 icons
  //stairs -- blue
  stroke(0, 255, 255);
  fill(0);
  rect(149, 430, 15, 15);
  //items -- blue
  noStroke();
  fill(0, 255, 255);
  ellipse(60, 450, 10, 10);
    ellipse(240, 340, 10, 10);
  //trap
  fill(0, 255, 255);
  rect(55, 433, 10, 10);

  //room 5
  stroke(255);
  strokeWeight(3);
  line(490, 70, 490, 115);
  line(490, 135, 490, 180);

  line(490, 70, 600, 70);
  line(490, 180, 600, 180);

  line(600, 70, 600, 180);

  //room 5 icons
  //blue item 1
  noStroke();
  fill(0, 255, 255);
  ellipse(540, 115, 10, 10);
  //blue item 2
  fill(0, 255, 255);
  ellipse(540, 125, 10, 10);
  //blue item 3
  fill(0, 255, 255);
  ellipse(540, 135, 10, 10);
  //blue item 4
  fill(0, 255, 255);
  ellipse(550, 115, 10, 10);
  //blue item 5
  fill(0, 255, 255);
  ellipse(550, 125, 10, 10);
  //blue item 6
  fill(0, 255, 255);
  ellipse(550, 135, 10, 10);
  //foe
  fill(255, 0, 0);
  ellipse(530, 125, 10, 10);

  //path from room 3 to deadends
  stroke(255);
  strokeWeight(3);
  line(640, 440, 900, 440);
  line(640, 465, 900, 465);

  line(900, 300, 900, 440);
  line(900, 465, 900, 600);
  line(920, 300, 920, 600);

  line(775, 275, 1050, 275);
  line(775, 125, 775, 275);
  line(1050, 125, 1050, 275);
  line(775, 125, 1050, 125);

  line(750, 300, 900, 300);
  line(920, 300, 1080, 300);
  line(750, 100, 750, 300);
  line(1080, 100, 1080, 300);
  line(750, 100, 1080, 100);

  line(900, 600, 920, 600);

  //path icons for path from room 3 to dead ends
  //foe
  noStroke();
  fill(255, 0, 0);
  ellipse(911, 290, 10, 10);
  //MC
  fill(255);
  ellipse(764, 135, 10, 10);
  //teammate
  fill(255, 255, 0);
  ellipse(764, 125, 10, 10);

}
