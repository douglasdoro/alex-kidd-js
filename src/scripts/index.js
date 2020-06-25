let character; 

function setup() {
  createCanvas(400, 400);
  frameRate(25);

  character = new Character(walkingImage, 20, height - 67, 41, 67, {
    captureX: 0,
    captureY: 0,
    fillX: 41,
    fillY: 67, 
    frames: [
      0 , 0, 0, 0, 0,
      41, 41, 41, 41, 41, 
      82, 82, 82, 82, 82
    ]
  }); 
   //image(walkingImage, 100, 0, 41, 67, walkingAnimation[walkingFrame], 0, 41, 67);

  walkingAnimation = [
    0 , 0, 0, 0, 0,
    41, 41, 41, 41, 41, 
    82, 82, 82, 82, 82
   ];

  // birdAnimation = [
  //   0, 0, 0, 0, 0,
  //   46, 46, 46, 46
  // ]; 

  // ghostAnimation = [
  //   0, 0, 0, 0, 0,
  //   42, 42, 42, 42
  // ];

  // deadAnimation = [
  //   0 , 0, 0, 0, 0,
  //   47, 47, 47, 47, 
  //   92, 92, 92, 92, 
  //  ];
}

function draw() {
  background(225);

  character.show(); 

  
  // image(birdImage, 10, 0, 67, 46, 0, birdAnimation[birdFrame], 67, 46);

  // if(birdFrame >= birdAnimation.length -1) {
  //   birdFrame = 0; 
  // }else {
  //   birdFrame++; 
  // }  

  // image(ghostImage, 160, 0, 42, 45, ghostAnimation[ghostFrame], 0, 42, 45);

  // if(ghostFrame >= ghostAnimation.length -1) {
  //   ghostFrame = 0; 
  // }else {
  //   ghostFrame++; 
  // }  


  // image(deadImage, 210, 0, 47, 66, deadAnimation[deadFrame], 0, 47, 66);

  // if(deadFrame >= deadAnimation.length -1) {
  //   deadFrame = 0; 
  // }else {
  //   deadFrame++; 
  // }  
}