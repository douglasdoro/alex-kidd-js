let walkingImage; 
let walkingAnimation;
let walkingFrame = 0; 

let birdImage; 
let birdAnimation; 
let birdFrame = 0; 

let ghostImage; 
let ghostAnimation; 
let ghostFrame = 0; 

let deadImage; 
let deadAnimation; 
let deadFrame = 0; 



function preload() {
  walkingImage = loadImage('walking.png');
  birdImage = loadImage('bird.png');
  ghostImage = loadImage('ghost.png');
  deadImage = loadImage('dead.png');
}

function setup() {
  createCanvas(400, 400);
  frameRate(25);

  walkingAnimation = [
    0 , 0, 0, 0, 0,
    41, 41, 41, 41, 41, 
    82, 82, 82, 82, 82
   ];

  birdAnimation = [
    0, 0, 0, 0, 0,
    46, 46, 46, 46
  ]; 

  ghostAnimation = [
    0, 0, 0, 0, 0,
    42, 42, 42, 42
  ];

  deadAnimation = [
    0 , 0, 0, 0, 0,
    47, 47, 47, 47, 
    92, 92, 92, 92, 
   ];


}



function draw() {
  background(225);
  
  image(birdImage, 10, 0, 67, 46, 0, birdAnimation[birdFrame], 67, 46);

  if(birdFrame >= birdAnimation.length -1) {
    birdFrame = 0; 
  }else {
    birdFrame++; 
  }  

  image(walkingImage, 100, 0, 41, 67, walkingAnimation[walkingFrame], 0, 41, 67);

  if(walkingFrame >= walkingAnimation.length -1) {
    walkingFrame = 0; 
  }else {
    walkingFrame++; 
  }  

  image(ghostImage, 160, 0, 42, 45, ghostAnimation[ghostFrame], 0, 42, 45);

  if(ghostFrame >= ghostAnimation.length -1) {
    ghostFrame = 0; 
  }else {
    ghostFrame++; 
  }  


  image(deadImage, 210, 0, 47, 66, deadAnimation[deadFrame], 0, 47, 66);

  if(deadFrame >= deadAnimation.length -1) {
    deadFrame = 0; 
  }else {
    deadFrame++; 
  }  
}