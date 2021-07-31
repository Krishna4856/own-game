class Army{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
        this.score=0;
        this.rank=null;
    }
    getCount(){
        var armyCountRef=database.ref('armyCount');
        armyCountRef.on("value",(data)=>{
            armyCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            armyCount:count
        })
    }
    update(){
        var armyIndex="armies/army"+ this.index;
        database.ref(armyIndex).set({
            name:this.name,
            distance: this.distance,
            score:this.score
        })
    }
    static getArmyInfo(){
        var armyInfoRef=database.ref('armies');
        armyInfoRef.on("value",(data)=>{
            allArmies=data.val();
        })
    }

}