class Game {
  constructor() {
    this.character = this._buildCharacter(20, CANVAS_HEIGHT);
    this.enemies = this._buildEnemies(); 
  }

  draw() {
    this.character.applyGravity(); 
    
    
    this.character.draw(); 
    this.enemies[0].draw(); 
  }

  play() {}

  over() {}

  keyPressed(key) {
    if(key === 'ArrowUp') this.character.jump(); 

    if(key === 'ArrowDown') this.character.crouched();
  }

  _buildCharacter(x, y) {
    const character = new Character(walkingImage, x, y, 41, 67, {
      captureX: 0,
      captureY: 0,
      fillX: 41,
      fillY: 67, 
      frames: [ 0, 41, 82 ]
    }); 
    
    return character; 
  }

  _buildEnemies() {
    const enemies = []; 

    const monsterBird = new Enemy(birdImage, width - 67, 200, 67, 46, {
      captureX: 0,
      captureY: 0,
      fillX: 67,
      fillY: 46, 
      frames: [ 0 , 67 ]
    });
  
    const ghost = new Enemy(ghostImage, width - 67, height - 45, 42, 45, {
      captureX: 0,
      captureY: 0,
      fillX: 42,
      fillY: 45, 
      frames: [ 0 , 42 ]
    });

    enemies.push(monsterBird, ghost);

    return enemies; 
  }
}