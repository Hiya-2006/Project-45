var bg, bgImg
var gun, gunImg
var monster, monsterImg
var tree, treeImg
var tree2, treeImg
var tree3, treeImg
var score;
var hitSound, GameOverSound, FailSound
var gameOverImg

function preload()
{
    bgImg=loadImage("bg.jpg")
    gunImg=loadImage("gun.png")
    monsterImg=loadImage("monster.png")
    treeImg=loadImage("tree.png")
    tree2Img=loadImage("tree.png")
    tree3Img=loadImage("tree.png")
    gameOverImg=loadImage("game over.jpg")

    hitSound = loadSound("hit.wav")
    FailSound = loadSound("fail.wav")
    GameOverSound = loadSound("game over.wav")
    
}
function setup()
{
  createCanvas(600,600)
  gun=createSprite(50,350)
  gun.addImage(gunImg)
  gun.scale=0.8

 
  /*monster=createSprite()
  monster.addImage(monsterImg)
*/
 
  tree=createSprite(250,500)
  tree.addImage(treeImg)
tree.scale=0.6

tree2=createSprite(375,500)
  tree2.addImage(treeImg)
tree2.scale=0.6

tree3=createSprite(505,500)
  tree3.addImage(treeImg)
tree3.scale=0.6

  
}
function draw()
{
    background(bgImg)
    drawSprites ();
}