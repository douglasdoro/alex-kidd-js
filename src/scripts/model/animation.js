class Animation {
  constructor(image, x, y, width, height, spriteMap) {
    this.image = image;
    this.x = x;
    this.y = y; 
    this.width = width; 
    this.height = height; 
    this.spriteMap = spriteMap

    this.frame = 0; 
    this.speedAnimation = .1; 
  }

  draw() {
    noFill();
    rect(this.x, this.y, this.width, this.height);

    image(this.image,
      this.x,
      this.y,
      this.width,
      this.height,
      this.spriteMap.captureX || 0,
      this.spriteMap.captureY || 0,
      this.spriteMap.fillX,
      this.spriteMap.fillY
    );

    this.animate(); 
  }

  animate() {
    this.spriteMap.captureX = this.spriteMap.frames[this.frame.toFixed()]; 
    
    if(this.frame >= this.spriteMap.frames.length -1) {
      this.frame = 0; 
    } else {
      this.frame = this.frame + this.speedAnimation; 
    } 
  }
}