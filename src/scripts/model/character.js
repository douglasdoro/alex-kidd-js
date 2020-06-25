class Character {
  constructor(image, x, y, width, height, spriteMap) {
    this.image = image;
    this.x = x;
    this.y = y; 
    this.width = width; 
    this.height = height; 
    this.spriteMap = spriteMap

    this.frame = 0; 
  }

  show() {
    image(this.image,
      this.x,
      this.y,
      this.width,
      this.height,
      this.spriteMap.captureX,
      this.spriteMap.captureY,
      this.spriteMap.fillX,
      this.spriteMap.fillY
    );

    this.animate(); 
  }

  animate() {
    this.spriteMap.captureX = this.spriteMap.frames[this.frame]; 
    
    if(this.frame >= this.spriteMap.frames.length -1) {
      this.frame = 0; 
    } else {
      this.frame++; 
    }  

  }
}