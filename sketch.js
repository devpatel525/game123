var car,wall;
var speed,weight;
car=createSprite(50,200,50,50)
wall=createSprite(1500,200,60,height/2)
speed=random(55,90)
weight=random(400,1500)
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  car.velocityX=speed;
}

function draw() {
  background("yellow");  
  drawSprites();
}