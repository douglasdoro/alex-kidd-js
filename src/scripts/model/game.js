class Game {
  constructor() {
    this.character = this._buildCharacter(config.character.x, config.canvas.height);
    this.enemies = this._buildEnemies(); 
  }

  draw() {
    this.character.applyGravity(); 
        
    this.character.draw(); 
    this.enemies[0].draw(); 
    this.enemies[1].draw(); 
  }

  play() {}

  over() {}

  keyPressed(key) {
    if(key === 'ArrowUp') this.character.jump(); 

    if(key === 'ArrowDown') this.character.crouched();
  }

  _buildCharacter(x, y) {
    const character = new Character(
        walkingImage,
        x, 
        y,
        config.character.walking.width,
        config.character.walking.height,
        config.character.walking.spriteMap
      ); 
    
    return character; 
  }

  _buildEnemies() {
    const enemies = []; 

    const monsterBird = new Enemy(
      birdImage,
      config.enemies.monsterBird.x,
      config.enemies.monsterBird.y,
      config.enemies.monsterBird.width,
      config.enemies.monsterBird.height,
      config.enemies.monsterBird.spriteMap 
    );
  
    const ghost = new Enemy(
      ghostImage,
      config.enemies.ghost.x,
      config.enemies.ghost.y,
      config.enemies.ghost.width,
      config.enemies.ghost.height,
      config.enemies.ghost.spriteMap 
    );

    enemies.push(monsterBird, ghost);

    return enemies; 
  }
}