class Stage {
  constructor() {
    this.scenario = new Scenario();
    this.defaultPlayerY = config.canvas.height - config.stage.one.defaultPlayerY; 
  }

  draw() {
    this.scenario.ground();
    this.scenario.elements(); 
  }
}