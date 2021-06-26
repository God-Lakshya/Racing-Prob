class Player {
    constructor() {
        this.index = null;
    this.distance = 0;
    this.name = null; 
    }
     
    getCount () {
    var playerCountref = database.ref("playerCount")
    playerCountref.on("value", function(data){
        playerCount = data.val()
    })
    }
    
    updateCount(count){
        database.ref('/').update({
    playerCount : count  
        })
    }
update(name) {
var playerIndex = "player" + playerCount ;
database.ref(playerIndex).set({
    Name : name 
})
} 

static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
