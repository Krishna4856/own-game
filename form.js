class Form{
    constructor(){
      this.input=createInput("PLAYER");
      this.button=createButton('START');
      this.greeting=createElement('k2');
      this.title=createElement('k2');
      this.reset=createButton('RESET');  
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display(){
        this.title.html("MISSILE DESTROYER");
        this.title.position(650,50);
        this.title.style('font-size','70px');
        this.title.style('color','lightgreen');
        this.input.position(850,400);
        this.input.style('width','200px');
        this.input.style('height','20px');
        this.input.style('background','lavender');
        this.button.position(850,500);
        this.button.style('width','200px');
        this.button.style('height','40px');
        this.button.style('background','skyblue');
        this.reset.position(900,660);
        this.reset.style('width','100px');
        this.reset.style('height','30px');
        this.reset.style('background','skyblue');

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            army.name=this.input.value();
            armyCount+=1;
            army.index=armyCount;
            army.update();
            army.updateCount(armyCount);
            this.greeting.html("Welcome" + army.name);
            this.greeting.position(650,300);
            this.greeting.style('color','orange');
            this.greeting.style('font-size','100px');
        })
        this.reset.mousePressed(()=>{
            var armyInfoRef=database.ref('army');
            armyInfoRef.remove();
            
        })
    
        
    }
}