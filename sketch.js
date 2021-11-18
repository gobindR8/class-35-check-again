var balloon,balloonImage1,balloonImage2, database;
// create database and position variable here

var position
function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
var balloonPosition=database.ref('balloon/position')
 balloonPosition.on("value",readPosition,)
  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);
if (position !== undefined)
  if(keyDown(LEFT_ARROW)){
    updateposition(-10,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    

  }
  else if(keyDown(RIGHT_ARROW)){
    updateposition(10,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    updateposition(0,10)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    balloon.scale=balloon.scale -0.01
  }
  else if(keyDown(DOWN_ARROW)){
    updatePosition(0,-10)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    balloon.scale=balloon.scale +0.01
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function updatePosition(x,y){
database.ref('balloon/position').set({
   'x': position.x+x,
    'y':position.y+y
})
}
function readPosition(data){
position= data.val()
console.log(position.x)
balloon.x=position.x
balloon.y=position.y
}
