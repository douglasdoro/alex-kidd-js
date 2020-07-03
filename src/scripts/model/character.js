class Character extends Animation {
  constructor(image, width, height, spriteMap, xInitial,  yInitial) {
    super(image, width, height, spriteMap);

    this.animationSpeed = config.character.animationSpeed; 
    this.isDead = false; 
    this.isJumping = false; 
    this.isCrouching = false; 
    this.upSpeed = 0; 
    this.gravity = 2; 

    this._yInitial = yInitial - this.height; 
    this.y = this._yInitial; 
    this.x = xInitial; 

    this.yVariation = 0; 
  }

  defineYPosition(position) {
    this.y = position - this.height;
  }

  jump() {
    if(this.isJumping || this.isDead) return false; 

    this.upSpeed = -20;  
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
    
    const isOutOfYInitial = this.y > this._yInitial + this.yVariation;
    if(isOutOfYInitial) this.y = this._yInitial + this.yVariation; 

    const isJumping = this.isJumping && isOutOfYInitial; 
    
    if(isJumping) {
      this.isJumping = false; 
      this.changeAnimationImage('walking');
    }

  }

  dead() {
    this.upSpeed = -4;  

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