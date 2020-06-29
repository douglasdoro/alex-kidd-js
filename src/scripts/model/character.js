class Character extends Animation {
  constructor(image, x, y, width, height, spriteMap) {
    super(image, x, y, width, height, spriteMap);

    this.speedAnimation = .23; 
    this.isDead = false; 
    this.isJumping = false; 
    this.isCrouching = false; 
    this.upSpeed = 0; 
    this.gravity = 3; 

    this.defaultPositionY = this.y - this.height; 
    this.yVariation = 0; 
  }

  jump() {
    if(this.isJumping || this.isDead) return false; 

    this.upSpeed = -30;  
    this.isJumping = true;
    this.changeAnimationImage('jumping'); 
    jumpSound.play(); 

  }

  crouched() {
    if(this.isJumping || this.isDead) return false; 

    if(this.isCrouching) {
      this.yVariation = 0; 
      this.changeAnimationImage('walking');
    } else {
      this.changeAnimationImage('crouched'); 
      this.yVariation = 11; 
    }

    this.isCrouching = !this.isCrouching; 

  }
  
  applyGravity() {
    this.y = this.y + this.upSpeed; 
    this.upSpeed = this.upSpeed + this.gravity
    
    const isOutOfDefaultY = this.y > this.defaultPositionY + this.yVariation;
    if(isOutOfDefaultY) this.y = this.defaultPositionY + this.yVariation; 

    const isJumping = this.isJumping && isOutOfDefaultY; 
    
    if(isJumping) {
      this.isJumping = false; 
      this.changeAnimationImage('walking');
    }

  }

  dead() {
    this.upSpeed = -5;  

    if(!this.isDead) {
      gameOverSound.play();
      gameOverSound.stop(3)
      this.changeAnimationImage('dead'); 
      this.isDead = true; 
    }
  }

  changeAnimationImage(state) {
    switch(state) {
      case 'jumping':
        this.image = jumpImage;
        this.width = config.character.jumping.width;
        this.height = config.character.jumping.height; 
        this.spriteMap = config.character.jumping.spriteMap;
        break;  
      case 'walking':
        this.image = walkingImage;
        this.width = config.character.walking.width;
        this.height = config.character.walking.height; 
        this.spriteMap = config.character.walking.spriteMap;
        break;  
      case 'dead':
        this.image = deadImage;
        this.width = config.character.dead.width;
        this.height = config.character.dead.height; 
        this.spriteMap = config.character.dead.spriteMap;
        break;  
      case 'crouched':
        this.image = crouchedImage; 
        this.width = config.character.crouched.width;
        this.height = config.character.crouched.height; 
        this.spriteMap = config.character.crouched.spriteMap;
        break;  
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