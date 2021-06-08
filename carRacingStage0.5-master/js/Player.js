class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
  }

  static updateCarsAtEnd(rank){
var pr=rank;
console.log(pr+"pr");
    database.ref('/').update({
      carsAtEnd : rank
    })
    this.rank += 1;
    console.log(this.rank +  " rank has been updated")
  }
  getCarsAtEnd(){
    database.ref('carsAtEnd').on("value", (data)=>{
      this.rank = data.val();
    });
    
  }
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  
  update(){
    var playerIndex = 'players/player' + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      place : this.rank
    })
    console.log(this.rank+"ranktest");
  }
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players')
    playerInfoRef.on("value",(data) => {
      allPlayer = data.val();
      console.log(allPlayer);

    })
  };
}


