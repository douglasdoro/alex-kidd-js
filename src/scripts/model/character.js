class Character extends Animation {
  constructor(image, x, y, width, height, spriteMap) {
    super(image, x, y, width, height, spriteMap);

    this.speedAnimation = .23; 
    this.isDead = false; 
    this.isJumping = false; 
    this.isCrouching = false; 
    this.jumpSpeed = 0; 
    this.gravity = 3; 

    this.defaultPositionY = this.y - this.height; 
    this.yVariation = 0; 
  }

  jump() {
    if(this.isJumping) return false; 

    this.jumpSpeed = -30;  

    this.isJumping = true;

    this.image = jumpImage; 
    this.width = 45; 
    this.height = 61;
    this.spriteMap = {
      captureX: 0,
      captureY: 0,
      fillX: 45,
      fillY: 61, 
      frames: [ 0 ]
    };

    jumpSound.play(); 
  }

  crouched() {
    
    this.image = crouchedImage; 
    this.width = 41; 
    this.height = 56;
    this.spriteMap = {
      captureX: 0,
      captureY: 0,
      fillX: 41,
      fillY: 56, 
      frames: [ 0 ]
    }

    this.yVariation = 11; 

    setTimeout(() => {
      this.isCrouching = true; 
      this.yVariation = 0; 
    }, 1000);
  }
  
  applyGravity() {
    
    this.y =  this.y + this.jumpSpeed; 
    this.jumpSpeed = this.jumpSpeed + this.gravity
    
    const isOutOfDefaultY = this.y > this.defaultPositionY + this.yVariation;
    if(isOutOfDefaultY) this.y = this.defaultPositionY + this.yVariation; 

    const isJumping = this.isJumping && isOutOfDefaultY; 
    
    if(isJumping || this.isCrouching) {
      this.isJumping = false; 
      this.isCrouching = false; 

      this.image = walkingImage; 
      this.width = 41; 
      this.height = 67;
      this.spriteMap = {
        captureX: 0,
        captureY: 0,
        fillX: 41,
        fillY: 67, 
        frames: [ 0, 41, 82 ]
      }
    }

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

  _calculateJumpHeight(speed, gravity, height) {

    let heightInitial = height; 

    let counter = speed / gravity; 

    for(let indice = 0; indice <= counter; indice++) {
      heightInitial = heightInitial - (gravity * indice); 
    }

    return heightInitial; 
  }
}