class Character extends Animation {
  constructor(image, x, y, width, height, spriteMap) {
    super(image, x, y, width, height, spriteMap);

    this.speedAnimation = .23; 

    this.isDead = false; 
  }

  dead() {
    if(!this.isDead) {
      this.spriteMap = {
        captureX: 0,
        captureY: 0,
        fillX: 46,
        fillY: 66, 
        frames: [ 0, 45, 89 ]
      }
  
      this.image = deadImage;
      this.width = 46; 
      this.height = 66; 
  
      this.isDead = true; 
    }
  }
}