//This sketch should cover the following commands and concepts:
//-- The use of random(low,high) using to 2 arguements to create a range of random values 
//-- The use of if statements to reset OR reverse integer values. Look at the ideas behind example 1 or example 2. ("wrap around" or 'bounce' code). NOTE: You don't need to have both. 
//--The use of Arrays to define, retrieve and update a group of values. (aka use example 4....)

//IMPORTANT Make at least 15 independent moving "objects", and add at least 3 more functional arrays to what is available in example 5.4 ( so that is at least 10 arrays )
//HINT: You will need to use a 'for loop' at least twice. 

// Super Array Version

PImage sun;
int j = 950;
//int j=200;
//int k=100;
int k = 475;
//int j=0;
//int k=0;
int l= 0;
int m= 0;
int count = 50;
int obj= 5;
float[] posX = new float[count]; 
//this is an array
float[] posY = new float[count];
float[] speedX = new float[count];
float[] speedY = new float[count];
float[] sizeW = new float[count];
float[] sizeH = new float[count];
int[] c = new int[count];
float[] objposX = new float[obj];
float[]objposY = new float[obj];
//int rampB = new int[count];

void setup() { 
   //frameRate(5);
  size(1900, 950);
  sun = loadImage("sun.png");
  for (int i=0; i < 50; i++) { 
    posX[i]= width/2;
    //posX[i] = random(40, width-40); 
    posY[i] = height/2; 
        //posY[i] = random(40, height-40); 
    speedX[i] = random(-5, 5); 
    speedY[i] = random(-3, 3); 
    sizeW[i] = random(2, 15); 
    sizeH[i] = random(2, 15); 
    c[i] = int(random(200, 255));
    //rampG[i] = int(random(255));
    //rampB[i] = int(random(255));
  }
} 
void draw() { 
  background(0); 
  noStroke();
  fill(255);
  imageMode(CENTER);
  image(sun,j,k,l,m);
  l++;
  m++;
      for (int i = 0; i < posX.length; i++) { 
    //update all positions 
    posX[i] += speedX[i]; 
    posY[i] += speedY[i]; 
    
    //rampG[i] += int(speedX[i]); 
    //rampB[i] += int(speedY[i]); 
    //draw all balls 
    
    fill(c[i]); 
    ellipse(posX[i], posY[i], sizeW[i], sizeW[i]);
    //check boundaries for all balls 

    //if (posX[i] < 40+sizeW[i]/2 || posX[i] > (width-40)-sizeW[i]/2 ) { 
    //  speedX[i] = -speedX[i];
    //} 
    //if (posY[i] < 40+sizeW[i]/2 || posY[i] > (height-40)-sizeW[i]/2) { 
    //  speedY[i] = -speedY[i];
    //}
    
        if (posX[i] > width+20) { 
      
      posX[i]=width/2;

            //speedX[i] = -speedX[i];
    } 
    if (posY[i] > height+20) { 
      posY[i] = height/2;
    

      //speedY[i] = -speedY[i];
    }
    
    //if (rampG[i] < 0 || rampG[i] > 255 ) { 
    //  speedX[i] = -speedX[i];
    //} 
    //if (rampB[i] < 0 || rampB[i] > 255) { 
    //  speedY[i] = -speedY[i];
    }
   //if (millis() > 50000){
   //   exit();
   // }
   // saveFrame("frames/sketch5-#####.png");
  }
//} 
