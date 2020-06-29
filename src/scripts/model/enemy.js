class Enemy extends Animation {
  constructor(image, x, y, width, height, spriteMap) {
    super(image, x, y, width, height, spriteMap);
    this.speed = 20; 

  }

  move() {
    this.x = this.x - this.speed;

    if(this.x - this.width < -config.canvas.width)
    {
      this.x = config.canvas.width + this.width;
    }
  }
}