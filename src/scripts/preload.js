let walkingImage; 
let birdImage; 
let ghostImage; 
let deadImage; 
let jumpImage;
let crouchedImage; 

let jumpSound;

function preload() {
  walkingImage = loadImage('images/character/walking.png');
  jumpImage = loadImage('images/character/jump.png');
  birdImage = loadImage('images/enimy/bird.png');
  ghostImage = loadImage('images/enimy/ghost.png');
  deadImage = loadImage('images/character/dead.png');
  crouchedImage = loadImage('images/character/crouched.png');

  jumpSound = loadSound('sounds/jump.mp3');
}


