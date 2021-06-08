class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
  var playerCountRef = await database.ref('playerCount').once("value");
     if(playerCountRef.exists()){
     playerCount = playerCountRef.val();
        player.getCount();
     }
      form = new Form()
      form.display();
      
    }
    car1=createSprite(100,200);
    car1.addImage(car1Img);
    car2=createSprite(300,200);
    car2.addImage(car2Img);
    car3=createSprite(500,200);
    car3.addImage(car3Img);
    car4=createSprite(700,200);
    car4.addImage(car4Img);
    cars = [car1,car2,car3,car4];
    
  }
  play(){
   form.hide();
   Player.getPlayerInfo();
   player.getCarsAtEnd();

   if(allPlayer !== undefined){
    background(rgb(198,135,103));
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
     //index of the array cars 
     // cars=[cars[0],cars[1],cars[2],cars[3]]
     //     cars = [car1,car2,car3,car4];
     var index = 0;

     var x = 0 
     var y = 0;
     var displayPos = 120;
     for(var plr in allPlayer){
       //add 1 to the index for every loop
       index=index+1;
         //position the cars a little away from each other in x direction
       x = x + 375 ;
       //use data form the database to display the cars in y direction
       //why - ? coz it has to go upwards
       y = displayHeight-allPlayer[plr].distance;
       cars[index - 1].x=x;
       cars[index - 1].y=y;
       if(index ===  player.index){
        fill("red");
        stroke(10);
        ellipse(x,y,90,90);
       cars[index-1].shapeColor= "red";
       //game camera
       camera.position.x=displayWidth/2;
       camera.position.y=cars[index-1].y;
      }
     

     displayPos += 20
    //  textSize(15);
    //  text(allPlayer[plr].name + ": " + allPlayer[plr].distance,150,displayPos);
  }
}
  if(keyIsDown(UP_ARROW) && player.index !== null){

     player.distance += 50;
     player.update();
     
  }
  if(player.distance >= 5150){
    gameState = 2;
    player.rank += 1;
    console.log(player.rank + "RHIS IS AFTER ADDITION ON LINE 91")
    Player.updateCarsAtEnd(player.rank);
  }
  drawSprites();
  };                
//   end(){
    
// //console.log("game has ended");
//   //  console.log(player.rank);
//   }
  displayRanks(){
    //display the medals
    console.log("display rank is called")
    camera.position.y = 0;
    camera.position.x = 0;

    imageMode(CENTER);

    Player.getPlayerInfo();

    image(bronze_img, displayWidth/-4, -100 + displayHeight/9, 200, 240);
    image(silver_img, displayWidth/4, -100 + displayHeight/10, 225, 270);
    image(gold_img, 0, -100, 250, 300);

    textAlign(CENTER);
    textSize(50);
    for(var plr in allPlayer){
        if(allPlayer[plr].place === 0){
            text("1st: " + allPlayer[plr].name, 0, 85);
        }else if(allPlayers[plr].place === 1){
            text("2nd: " + allPlayer[plr].name, displayWidth/4, displayHeight/9 + 73);
        }else if(allPlayers[plr].place === 2){
            text("3rd: " + allPlayer[plr].name, displayWidth/-4, displayHeight/10 + 76);
        }else{
            textSize(30);
            text("Honorable Mention: " + allPlayers[plr].name, 0, 225);
        }
    }
}
}
