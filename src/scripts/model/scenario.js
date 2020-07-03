class Scenario {
  constructor(scenarioConfig) {
    this.config = scenarioConfig;
    this.groundY; 
    this.groundCollection;
    this.groundX;
    this._elements;
    this.elementsSpeed;
    this.groundSpeed; 

    this.setup(); 
  }

  setup() {
    this.groundInfo = config.stage.one.ground; 
    this.groundY = config.canvas.height - this.config.ground.height; 
    this.groundCollection = this._buildGround();
    this.groundX = 0;
    this.groundSpeed = this.config.ground.speed;  

    this._elements = this.config.elements.collection;
    
  }

  elements() {
    for(let index = 0; index < this._elements.length; index++){

      if(this._elements[index].type === 'tree') this._elements[index].image = singleTreeImage;
      if(this._elements[index].type === 'cloud') this._elements[index].image = cloudImage;

      if(this._elements[index].direction === 'right') {
        this._elements[index].initialX = 0; 
        this._drawElementLeftToRight(this._elements[index]); 
        continue; 
      }
      
      this._elements[index].initialX = config.canvas.width; 
      this._drawElementRightToLeft(this._elements[index]); 
    }
  }
  
  ground(){
    this.groundX = this.groundX - this.groundSpeed;  
    this.groundCollection.forEach(indexX => {
      const dynamicPositionX = indexX + this.groundX
      image(stageOneImage, dynamicPositionX , this.groundY); 
      
      const isOutOfCanvas = this.groundX < -config.canvas.width;
      if(isOutOfCanvas) this.groundX = 0; 

    });
  }

  _drawElementLeftToRight(element) {
    if(!element.y) element.y = this.groundY - element.height;

    image(element.image, element.x , element.y, element.width, element.height); 
    element.x = element.x + this._defineMovementSpeed(element.speed);

    const isOutOfCanvas = element.x > config.canvas.width + element.width; 
    if(isOutOfCanvas) {
      element.x = element.initialX - element.width;
    }
  }

  _drawElementRightToLeft(element) {
    const noHeight = !element.y;  
    if(noHeight) element.y = this.groundY - element.height;

    image(element.image, element.x , element.y, element.width, element.height); 
    
    element.x = element.x - this._defineMovementSpeed(element.speed);

    const isOutOfCanvas = element.x < -element.width; 
    if(isOutOfCanvas) element.x = element.initialX; 
  }

  _defineMovementSpeed(element) {
    return this.elementsSpeed === 0 ?
    this.elementsSpeed : parseFloat(element);
  }

  _buildGround() {
    let groundWidthIndex = 0; 
    const groundCollection= []; 

    while(groundWidthIndex < config.canvas.width * 2) {
      groundCollection.push(groundWidthIndex);
      groundWidthIndex = groundWidthIndex + this.config.ground.width; 
    }

    return groundCollection; 
  }
}