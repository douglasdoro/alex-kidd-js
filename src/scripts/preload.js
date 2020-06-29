let game; 
let config;
let walkingImage; 
let birdImage; 
let ghostImage; 
let deadImage; 
let jumpImage;
let crouchedImage; 
let jumpSound;
let gameOverSound;

function preload() {
  config = loadJSON('config/config.json', fillConfigAfterLoad);
}

function fillConfigAfterLoad(data) {
  walkingImage = loadImage(config.character.walking.imagePath);
  jumpImage = loadImage(config.character.jumping.imagePath);
  birdImage = loadImage(config.enemies.monsterBird.imagePath);
  ghostImage = loadImage('images/enemies/ghost.png');
  deadImage = loadImage(config.character.dead.imagePath);
  crouchedImage = loadImage(config.character.crouched.imagePath);

  jumpSound = loadSound(config.character.soundPathJump);
  gameOverSound = loadSound(config.character.soundPathGameOver);
} 
