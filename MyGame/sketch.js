var ObstaclesGroup,ObstaclesGroup2;
var score = 0
var Obstacles,Obstacles2;
var tankimg1,tankimg2,bomb;
var gameState="stage1";
var base
var lifetime = 10
var Stage2
var GameOver
var castle
var level2img
function preload(){
 tankimg1=loadImage("images/Tank1.png");
 bomb=loadImage("images/Bomb.png");
 castleImg=loadImage("images/Castle.png");
 DestroyedcastleImg=loadImage("images/Destroyed.png");
 level2img=loadImage("images/level2.png");
 GameOverimg=loadImage("images/Game-Over.jpg");
}

function setup(){
 createCanvas(1500,800);
 castle=createSprite(200,height/2);
 castle.addImage(castleImg);
 castle.scale=2;
 Stage2=createSprite(800,300,30,30);
 Stage2.visible=false;
 Stage2.addImage(level2img);
 ObstaclesGroup = new Group();
 ObstaclesGroup2 = new Group();
}


function draw(){
 background("blue");
 textSize(28)
 fill('black')
 text("lifetime  "+lifetime,800,30)
 console.log(lifetime);
 if (gameState==="stage2"){
    spawnObstacles2();
 }
 if (lifetime===0){
     gameState="end"
 }
 if (gameState==="end"){
     castle.scale=1;
     castle.addImage(DestroyedcastleImg);
     GameOver=createSprite(800,400);
     GameOver.addImage(GameOverimg);
     ObstaclesGroup.destroyEach();
     ObstaclesGroup2.destroyEach();
     
 }
 for(var i = 0;i<ObstaclesGroup.length;i++){
     if (ObstaclesGroup.get(i).isTouching(castle)){
         ObstaclesGroup.get(i).destroy();
         lifetime--
     }
 }

 if (score === 3)
 {
gameState="stage2";
 }
 if (gameState==="stage2"){

     Stage2.visible=true
 }
 if (mousePressedOver(Stage2)){
     Stage2game();
 }

 
 if (gameState==="stage1"||gameState==="stage2")
 {
 spawnObstacles();

 }
 if (mousePressedOver(Obstacles))
 {
     score++
     Obstacles.destroy();
     Obstacles = null;
 }
 if (mousePressedOver(Obstacles2))
 {
     score++
     Obstacles2.destroy();
     Obstacles2 = null;
 }
 
 drawSprites();
 textSize(20);
 fill("red")
 text("score  "+score,100,20)

}
 function Stage2game(){
 
     Stage2.destroy();
     
     gameState = "level2"
     lifetime=5
 }
function spawnObstacles(){
console.log(gameState);
 if  (frameCount%60 === 0){
 Obstacles = createSprite(1500,200,20,20);
 Obstacles.addImage(tankimg1);
 Obstacles.scale=0.3
 Obstacles.lifetime=500
var rand = random(600,300)
Obstacles.y=rand;


if (gameState==="stage1"){
Obstacles.velocityX=-5
}
else if(gameState==="stage2"){
Obstacles.velocityX=-10;
}
if (gameState==="stage2"){
   

for(var i = 0;i<ObstaclesGroup2.length;i++){
    if (ObstaclesGroup2.get(i).isTouching(castle)){
        ObstaclesGroup2.get(i).destroy();
        lifetime--
    }
}
}
ObstaclesGroup.add(Obstacles);
   } 
}
function spawnObstacles2(){
    console.log("Obstacles2");
    if  (frameCount%50 === 0){
    Obstacles2 = createSprite(1500,200,120,120);
    Obstacles2.scale=0.3;
    Obstacles2.addImage(bomb);
    Obstacles2.velocityX=-7;
    Obstacles2.lifetime=500;
   var rand = random(600,300);
   Obstacles2.y=rand;
   ObstaclesGroup2.add(Obstacles2);
}
}



