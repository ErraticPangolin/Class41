class Form {
  constructor() {
    this.input = createInput("name");
    this.button = createButton("Play")
    this.greeting = createElement('h3');
    this.reset = createButton("Reset")
  }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    };

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2 - 100, 200);
    
    this.input.position(displayWidth/2 - 100, displayHeight/2 - 200) ;
    this.button.position(displayWidth/2 + 50, displayHeight/2 - 200);
    this.reset.position(displayWidth - 400,20)

    this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    

       player.name = this.input.value();
      playerCount+=1;
      console.log(playerCount);
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name +"!")
      this.greeting.position(displayWidth/2 - 75, displayHeight/2 - 200)
    });
 this.reset.mousePressed(()=>{
  player.updateCount(0);
  game.update(0);
  database.ref('/').update({
    carsAtEnd : 0,
    players : null 
  });
 })
  }
}
