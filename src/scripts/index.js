function setup() {
  createCanvas(config.canvas.width, config.canvas.height); // 4 : 3
  frameRate(config.frameRate);

  game = new Game(); 
  game.setup(); 
}

function keyPressed() {
  game.keyPressed(key); 
}

function keyReleased() {
  game.keyReleased(key); 
}

function draw() {
  background('#09adff');

  game.draw(); 
}