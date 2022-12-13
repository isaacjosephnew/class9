
function setup() {
  ball = createSprite(200,200,20,20);
  ball.shapeColor = "blue"

  createCanvas(400,400);
}

function draw() 
{
  background(30);
  if (keyDown("up")) {
  ball.velocityY = -3 
}  


  drawSprites()

}




