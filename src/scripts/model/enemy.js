class Enemy extends Animation {
  constructor(image, width, height, spriteMap) {
    super(image, width, height, spriteMap);
  }

  move() {
    this.x = this.x - this.xMovementSpeed;
  }

  isOutOfCanvas() {
    const isOutOfCanvas = this.x < -this.width; 
    return isOutOfCanvas; 
  }
}