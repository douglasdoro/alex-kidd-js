class Enemy extends Animation {
  constructor(image, x, y, width, height, spriteMap) {
    super(image, x, y, width, height, spriteMap);
    this.speed = 2; 

  }

  move() {
    this.x = this.x - this.speed;

    const isOutOfCanvas = this.x - this.width < -this.width; 
    if(isOutOfCanvas) this.x = config.canvas.width + this.width;
  }
}