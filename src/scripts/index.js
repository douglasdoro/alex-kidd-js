function setup() {
  createCanvas(config.canvas.width, config.canvas.height); // 4 : 3
  frameRate(config.frameFate);

  game = new Game(); 
}

function keyPressed() {
  game.keyPressed(key); 
}

function draw() {
  background('#09adff');

  game.draw(); 
}