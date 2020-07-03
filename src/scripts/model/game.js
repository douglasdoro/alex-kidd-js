class Game {
  constructor() {
    this.scenario; 
    this.events = []; 
     
    this.isOver;
  }

  setup() {
    this.isCollide = false;
       
    const stageConfig = config.stage.one; 
    this.stage = new Stage(stageConfig);
    this.stage.startSound(); 
  }

  draw() {
    this.stage.draw(this.events, (isCollide) => { 
      if (this.events.length) this.events = [];

      this.isOver = isCollide; 
    }); 

    if(this.isOver) this.events.push('dead'); 
  }

  keyPressed(key) {
    this._addEvent(key); 
  }

  keyReleased(key) {
    if(key === 'ArrowDown') this._addEvent(key); 
  }

  _addEvent(eventName) {
    if(!this.events.includes(eventName)) this.events.push(key); 
  }
}