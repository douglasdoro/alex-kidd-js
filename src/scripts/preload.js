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
let stageOneImage; 
let singleTreeImage; 
let cloudImage; 
let mainThemeSound;

function preload() {
  config = loadJSON('config/config.json', fillConfigAfterLoad);
}

function fillConfigAfterLoad(data) {
  walkingImage = loadImage(config.character.walking.imagePath);
  jumpImage = loadImage(config.character.jumping.imagePath);
  birdImage = loadImage(config.enemies.monsterBird.imagePath);
  ghostImage = loadImage(config.enemies.ghost.imagePath);
  deadImage = loadImage(config.character.dead.imagePath);
  crouchedImage = loadImage(config.character.crouched.imagePath);
  stageOneImage = loadImage(config.stage.one.scenario.ground.imagePath);
  singleTreeImage = loadImage(config.stage.one.scenario.elements.tree.imagePath);
  cloudImage = loadImage(config.stage.one.scenario.elements.cloud.imagePath);

  jumpSound = loadSound(config.character.soundPathJump);
  gameOverSound = loadSound(config.character.soundPathGameOver);
  mainThemeSound = loadSound(config.mainThemeSoundPath);
} 
