let game; 
let config;
let walkingImage; 
let birdImage; 
let ghostImage; 
let deadImage; 
let jumpImage;
let crouchedImage; 
let jumpSound;

function preload() {
  config = loadJSON('config/config.json', fillConfigAfterLoad);
}

function fillConfigAfterLoad(data) {
  walkingImage = loadImage(config.character.walking.imagePath);
  jumpImage = loadImage('images/character/jump.png');
  birdImage = loadImage(config.enemies.monsterBird.imagePath);
  ghostImage = loadImage('images/enemies/ghost.png');
  deadImage = loadImage('images/character/dead.png');
  crouchedImage = loadImage('images/character/crouched.png');

  jumpSound = loadSound('sounds/jump.mp3');
} 
