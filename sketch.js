
function setup() {
  createCanvas(1400,650);
  background(51);
  box = createSprite(700,300,40,40);
  box.shapeColor="black"

}

function draw() 
{

  // write the code to change background color 
  background("pink")
  // to red when RIGHT_ARROW is pressed
  if(keyIsDown(RIGHT_ARROW))
{
  background("red")
}  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

if (keyIsDown(SHIFT))
{
  background("lightgreen");
}  
if (keyIsDown(ENTER)){
  background("purple");
}
if(keyIsDown(CONTROL)){
  background("orange");
}
  drawSprites();
}

