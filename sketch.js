var path,boy, bomb,bomb2,coin,drink,power,skull,leftBoundary,rightBoundary;
var pathImg,boyImg,bombImg,coinImg,drinkImg,powerImg,skullImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadAnimation("bomb.png");
  coinImg = loadAnimation("coin.png");
  drinkImg = loadAnimation("energyDrink.png");
  powerImg = loadAnimation("power.png");
  skullImg = loadAnimation("skull.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,240,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

coin = createSprite(125,100);
coin.scale = 0.3 ;
coin.addAnimation("coin",coinImg);
coin.velocityY = 2;

bomb = createSprite(280,100);
bomb.scale = 0.05;
bomb.addAnimation("bomb",bombImg);
bomb.velocityY = 2;

bomb2 = createSprite(100,300);
bomb2.scale = 0.05;
bomb2.addAnimation("bomb2",bombImg);
bomb2.velocityY = 2;


drink = createSprite(200,0);
drink.scale = 0.05;
drink.addAnimation("drink",drinkImg);
drink.velocityY = 2;
  

leftBoundary=createSprite(0,0,100,800);

 leftBoundary.invisible = false;
 leftBoundary.visible = true;
 leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,900);
rightBoundary.visible = false;

}

function draw() {

  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
   
  path.y = height/2;
  }

  if(path.y > 400 ){
path.y = height/2;}

if(path.y > 400 ){
  path.y = height/2;
}

if(coin.y > 400 ){
  coin.y = 0
}

if(bomb.y > 400 ){
  bomb.y = 0;
}

if(bomb2.y > 300 ){
  bomb2.y = 0;
}

if(drink.y > 300 ){
  drink.y = 0
}

if(boy.isTouching(coin)){
  power = createSprite(200,200);
  power.scale = 0.5;
  power.addAnimation("power",powerImg);
  bomb.destroy();
  coin.destroy();
  path.destroy();
  bomb2.destroy();
  drink.destroy();
  boy.destroy();
}

if(boy.isTouching(bomb)){
  skull = createSprite(200,200);
  skull.scale = 0.5;
  skull.addAnimation("skull",skullImg);
  bomb.destroy();
  coin.destroy();
  path.destroy();
  bomb2.destroy();
  drink.destroy();
  boy.destroy();
}

if(boy.isTouching(drink)){
  power = createSprite(200,200);
  power.scale = 0.5;
  power.addAnimation("power",powerImg);
  bomb.destroy();
  coin.destroy();
  path.destroy();
  bomb2.destroy();
  drink.destroy();
  boy.destroy();
}


  drawSprites();

}


