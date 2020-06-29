class Game {
  constructor() {
    this.character = this._buildCharacter(config.character.x, config.canvas.height);
    this.enemies = this._buildEnemies(); 
    this.isCollide = false;

  }

  draw() {
    this.character.applyGravity(); 
    this.character.draw(); 

    if(this.isCollide) {
      this.character.dead(); 
    } else {
      for(let index = 0; index < this.enemies.length; index++)  {
        this.enemies[index].draw();
        this.enemies[index].move(); 
  
        //this.isCollide = this.checkIfTheyCollide(this.character, this.enemies[index]);
        
        if(this.isCollide) break; 
        
      }
    }
  }

  checkIfTheyCollide(character, enemy) {
    return character.x > enemy.x && character.x - character.width < enemy.x; 
  }

  over() {}

  keyPressed(key) {
    if(key === 'ArrowUp') this.character.jump(); 
    if(key === 'ArrowDown') this.character.crouched();
  }

  keyReleased(key) {
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