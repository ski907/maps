//int x;
//int y;

function setup() {
  createCanvas(800, 800);
  background(220);
  
  x = 400;
   
  y = 800;
  
  y_dir = -1
  
}

function draw() {

  
  
  fill(y+random(50,100),y-random(50,100),y+random(50,100));
  ellipse(x,y,100,100);
  x+=randomGaussian(0, 10);
  y+=3*y_dir;
  if(y>800||y<0) {
    y_dir *= -1
  }
}