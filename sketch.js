var wall;
var car;


var speed, weight;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  speed=random = (55,90);
  weight=random = (400,1500);

  car=createSprite(50,200,50,50);

  car.velocity.x = speed;

  wall=createSprite(1500,200,60, height/2);
  
  wall.shapeColor = color (80,80,80)
  
}

function draw() {
  background(0);  
  drawSprites();
}