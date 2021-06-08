var canvas, backgroundImage;
var allPlayer;
var gameState = 0;
var playerCount;
var car1,car2,car3,car4,cars;
var database;
var carImg,car2Img,car3Img,car4Img,trackImg,groundImg;
var form, player, game;
var carsAtEnd;
function preload(){
  car1Img = loadImage('./images/car1.png')
  car2Img = loadImage('./images/car2.png')
  car3Img = loadImage('./images/car3.png')
  car4Img = loadImage('./images/car4.png')
  track= loadImage('./images/ground.jpg');
  ground = loadImage('./images/ground.png');
  
  bronze_img = loadImage("images/bronze_img.jpeg");
  silver_img = loadImage("images/silver_img.jpg");
  gold_img = loadImage("images/gold_img.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
   // game.end();
  }
  if (gameState === 2 && carsAtEnd === 4) {
    game.displayRanks();
  }
}
