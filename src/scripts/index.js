let character; 
let monsterBird; 
let ghost; 

let count = 0; 

function setup() {
  createCanvas(400, 400);
  frameRate(30);

  character = new Character(walkingImage, 20, height - 67, 41, 67, {
    captureX: 0,
    captureY: 0,
    fillX: 41,
    fillY: 67, 
    frames: [ 0, 41, 82 ]
  }); 

  monsterBird = new Enimy(birdImage, width - 67, 200, 67, 46, {
    captureX: 0,
    captureY: 0,
    fillX: 67,
    fillY: 46, 
    frames: [ 0 , 67 ]
  });

  ghost = new Enimy(ghostImage, width - 67, height - 45, 42, 45, {
    captureX: 0,
    captureY: 0,
    fillX: 42,
    fillY: 45, 
    frames: [ 0 , 42 ]
  });
  
}

function draw() {
  //background('#09adff');
  background(255);

  character.show(); 
  monsterBird.show();  
  ghost.show();

  count++; 

  if(count > 100) {
    character.dead();
  }
}