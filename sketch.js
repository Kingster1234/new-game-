var Bg
var bgImg, asteroids
var asImg, ship
var shipImg
var PLAY=1
var END=0
var gameState=PLAY
var obstacleGroup
var score
function preload(){
bgImg=loadImage("3.jpg")
asImg=loadImage("2.png")
shipImg=loadImage("1.png")
}
function setup() {
  createCanvas(800,800);
  Bg = createSprite(400, 300, 50, 50);
  Bg.addImage(bgImg)
  Bg.scale=2
  ship = createSprite(400,730,50,50)
  ship.addImage(shipImg)
  ship.scale=0.35
  obstacleGroup=new Group()
  score=0
}

function draw() {
  //background(0);  
  
 
  textSize(30)
 text("Score: "+score,620,50)
  if(gameState===PLAY){
  if(keyDown(LEFT_ARROW)){
    ship.x=ship.x-5
  }
  score=score+Math.round(getFrameRate()/60);
  if(keyDown(RIGHT_ARROW)){
    ship.x=ship.x+5
  }
  if (obstacleGroup.isTouching(ship)){
    gameState=END
  }
  spawnObstacles()
}
else if(gameState===END){
obstacleGroup.destroyEach()
textSize(35)
fill("red")
text("GAME OVER",300,400)
text("Press R to Restart",280,500)
if(keyDown("R")&&gameState===END){
  gameState=PLAY
  score=0
}
}
drawSprites();
}






function spawnObstacles(){
  if(frameCount%75===0){
  asteroids=createSprite(400,-30, 30,30)
  asteroids.addImage(asImg)
  obstacleGroup.add(asteroids)
  asteroids.scale=0.25
  asteroids.x=Math.round(random(50,750))
  asteroids.velocityY= 5+score/100
  }
 
  
}