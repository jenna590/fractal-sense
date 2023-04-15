
// let b1;
// let b2;
// let b3;
let button;

let mic;
let capture;
let t = 0;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();
  button = createButton("Click me");
  button.position(0, 0);
  button.mousePressed(saveImage);
  capture = createCapture(VIDEO);
  capture.hide();
  cnv.mousePressed(userStartAudio);
  stroke(0,45);
  noFill();
  
  
  
  // b1 = createButton('quad');
  // b1.position(0, 0);
  // b1.mousePressed(tool1);
  // b2 = createButton('tri');
  // b2.position(50, 0);
  // b2.mousePressed(tool2);
  // b3 = createButton('circ');
  // b3.position(80, 0);
  // b3.mousePressed(tool3);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  
  let vol = mic.getLevel();
  if (vol > 0.1 && vol < 0.2) {
    stroke(255, 3, 200, 25);
  }
  else if(vol > 0.2){
    stroke(255, 0, 0, 90);
  }
  else {
    stroke(0,25);
  }
  // Use the analyze function to find the values for each frequency 
  let h = map(vol, 0, 1, height, 1);

  quad(width / 2.3, h - 100, width / 2.7, h - 100, width / 2.3, h - 200, width / 2.2, h - 200);
  quad(width / 2.1, h - 100, width / 1.7, h - 100, width / 1.8, h - 200, width / 2, h - 200);
  quad(width / 4, h - 200, width / 3.3, h - 200, width / 3.4, h - 100, width / 3.9, h - 100);
  quad(width / 1.3, h - 200, width / 1.1, h - 200, width / 1.3, h - 100, width / 1.4, h - 100);
  quad(width / 5.3, h - 200, width / 7, h - 200, width /9, h - 100, width / 5.4, h - 100);
  // ellipse(width / 1.2, h - 205, 100, 50);
  // ellipse(width / 3, h - 25, 100, 50);
  // ellipse(width / 4, h - 105, 100, 50);
  // ellipse(width / 6, h - 25, 100, 50);
  // ellipse(width / 12, h - 105, 100, 50);
  image(capture, 100, 100, 50, 50);
  image(capture, 200, 200, 50, 50);
  image(capture, 300, 300, 50, 50);
  image(capture, 400, 400, 50, 50);
  image(capture, 500, 500, 50, 50);
  image(capture, 600, 600, 50, 50);

}
function mouseDragged(){
  let x1 = mouseX + noise(t * 110);
  let x2 = mouseX + noise(t * 145);
  let x3 = mouseX+ noise(t * 114);
  let x4 = mouseX+ 10 + noise(t * 145);
  let y1 = mouseY + noise(t * 145);
  let y2 = mouseY + noise(t * 106);
  let y3 = mouseY + noise(t * 115);
  let y4 = mouseY + noise(t * 115);

  quad(x4, y4, x2, y2, x3, y3, x1, y1);
  quad(x4*1.01, y4, x2*1.01, y2, x3*1.01, y3, x1*1.01, y1);
}

// this.keyPressed = function(e) {
//   if (e.keyCode == 90 && (e.ctrlKey || e.metaKey)) {
//     undoToPreviousState();
//   }
// }
 
// this.undoToPreviousState = function() {
// if (!previousState) {
//     return;
//   }
//   background(255);
//   image(previousState, 0, 0);
//   previousState = null;
// }
 
// this.mousePressed = function() {
//   saveState();
// }
 
// function saveState() {
//   previousState = get();
// }
function saveImage() {
  saveCanvas('myCanvas', 'png');
 }