var bg,galaxy
var fighterJetImg, laserImg
var ufoImg

var score
var gameOverSound, shootSound


function preload() {
  UFO = loadAnimation(UFO.png)
  FIGHTER. JET = loadImage(FIGHTER. JET.jpg)
  bgimg = loadImage(GALAXY.png)

  laser = loadImage(Laser.jpg)

  shootSound = loadSound("shoot.wav")
  gameOverSound = loadSound("Game over.wav")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  bg.addImage(bgimg);
  bg.scale = 3.3

  var message = "This is a message";
  console.log(message)
FIGHTER. JET = createSprite(240,330,20,50);
  FIGHTER. JET.addImage(FIGHTER.JETIMG)
  FIGHTER. JET.scale = 0.15
  FIGHTER. JET.debug = true

 
  Laser = creteSprite(240,330,20,50);
  Laser.addImage(LaserImg)
  Lase.scale = 0.06

  UFOGROUP = new Group();
}

function draw() {
  background(255,255,255);
  
  if(KeyDown(LEFT_ARROW)||touches.length>0){
    player.x= player.x-30
  }
  if(KeyDown(RIGHT_ARROW)||touches.length>0){
    player.x= player.x+30
  }



  if(KeyWentLeft("space")){
    FIGHTER. JET.addImage(FIGHTER. JET_LaserImg)
  }

  else if(KeyWentRight("space")){
    FIGHTER. JET.addImage(LaserImg)
  }

  if(UFOGroup.isTouching(FIGHTER. JET)){


    for(var i=0;i<UFOGroup.length;i++){

    if(UFOGroup[i].isTouching(FIGHTER. JET)){
      UFOGroup[i].destroy()
      life = life-1
    }
    }
  }
  drawSprites();
}


function enemy(){
  if(frameCount%50===0){
    
    UFO = createSprite(random(500,1000),random(500,1000),40,40)

    UFO.addImage(UFOIMG)
    UFO.scale = 0.33
    UFO.velocityY = +3
    UFO.debug = true

    UFO.lifetime = 600
    UFOGroup.adde(UFO)
  }
}