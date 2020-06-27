const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 375; 

let game; 

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT); // 4 : 3
  frameRate(25);

  game = new Game(); 
}

function keyPressed() {
  game.keyPressed(key); 
}

function draw() {
  background('#09adff');

  game.draw(); 

 
}