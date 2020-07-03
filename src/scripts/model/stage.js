class Stage {
  constructor(stageConfig) {
    this.config = stageConfig; 

    this.scenario = new Scenario(this.config.scenario);

    this.enemies = this.getEnemiesCollection();
    this.indexInEnemyCollection = 0;
    this.isCollide = false; 


    this.characterYInitial = config.canvas.height - this.config.scenario.ground.height; 
    this.character = new Character(
      walkingImage,
      config.character.walking.width,
      config.character.walking.height,
      config.character.walking.spriteMap,
      this.config.personageXInitial,
      this.characterYInitial
    ); 
       
    this.isGameOver = false; 
  }

  draw(events, cb) {
    cb(this.isCollide); 
    
    this.scenario.elements(); 
    this.scenario.ground();
    this.character.applyGravity(); 
    this.character.draw(); 
    
    if(this.isGameOver) {
      this.character.dead();
      this.scenario.groundSpeed = 0; 
      this.scenario.elementsSpeed = 0; 
    }
    else {
      events.forEach(event => {
        if(event === 'ArrowUp') this.character.jump(); 
        if(event === 'ArrowDown') this.character.crouched();
        if(event === 'dead') { 
          
          this.isGameOver = true; 
        }
      });
  

      const enemy = this.enemies[this.indexInEnemyCollection];
      enemy.draw();
      enemy.move(); 
        
      this.isCollide = this._checkIfTheyCollide(this.character, enemy);


      console.log(enemy); 

      if(enemy.isOutOfCanvas()) {
        this.indexInEnemyCollection++; 

        enemy.x = config.canvas.width; 

        if(this.indexInEnemyCollection > this.enemies.length - 1) {
          this.indexInEnemyCollection = 0; 
        }
      }

      console.log(this.indexInEnemyCollection);  
     
    }
  }

  startSound() {
    mainThemeSound.loop();
    mainThemeSound.setVolume(0.1);
  }

  _checkIfTheyCollide(character, enemy) {
    
    const precision = .7;
    
    const colision = collideRectRect(
      character.x,
      character.y,
      character.width * precision,
      character.height * precision,
      enemy.x,
      enemy.y,
      enemy.width * precision,
      enemy.height * precision
    );
    
    return colision; 
  }

  getEnemiesCollection() {
    const enemies = this.config.enemiesMap;  
    const enemiesCollection = []; 

    enemies.forEach(enemySetting => {
      enemiesCollection.push(this._buildEnemie(enemySetting));
    });

    return enemiesCollection;
  }

  _buildEnemie(enemySetting) {
    let enemy = {};  

    switch(enemySetting.type) {
      case'ghost':
        enemy = new Enemy(
          ghostImage,
          config.enemies.ghost.width,
          config.enemies.ghost.height,
          config.enemies.ghost.spriteMap 
        );
        break;
      case 'monsterBird':
        enemy = new Enemy(
          birdImage,
          config.enemies.monsterBird.width,
          config.enemies.monsterBird.height,
          config.enemies.monsterBird.spriteMap 
        );
      break;
    }
 
    enemy.x = enemySetting.x;
    enemy.y = enemySetting.y;
    enemy.xMovementSpeed = enemySetting.speed;

    return enemy; 
  }
}