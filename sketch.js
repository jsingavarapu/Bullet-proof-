var bullet,wall;
var speed,weight,thickness;
var chanceofdeath;
function setup() {
  thickness=random(23,83)
  createCanvas(1600, 400);
  speed=random(210,321);
  weight=random(20,52);
  wall=createSprite(1200,200,thickness,height/2);
  bullet=createSprite(50,200,20,10);
  bullet.velocityX=speed;
  chanceofdeath=0.5*weight*speed*speed/thickness*thickness*thickness;
}

function draw() {
  background(220);
  drawSprites();


  bullet.shapeColor=color(255);
  wall.shapeColor=color(80,80,80);


 if (wall.x-bullet.x<(bullet.width+wall.width)/2)
{
  bullet.velocityX=0; 


  if (chanceofdeath<48700000){
    bullet.shapeColor=color(0,255,0);
  }  

  if (chanceofdeath>48700000)
  {   
    bullet.shapeColor=color(255,0,0);
  } 
  
  bullet.x=1200;
  bullet.y=200;


  
}
 

 
}


  

