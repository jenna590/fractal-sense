let capture;
let mic;
var b1 = document.getElementById('startButton');
      b1.addEventListener('click', function() {
        var start = document.getElementById('message');
        start.style.display = 'none';
      });
var b2 = document.getElementById('aboutButton');
  b2.addEventListener('click', function() {
    var start = document.getElementById('message');
      start.style.display = 'block';
  });  
function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  background(255);
  button = createButton("screen capture");
  button.position(windowWidth -120, 0, 'fixed');
  button.mousePressed(saveImage);

  capture.hide();
  mic = new p5.AudioIn();
  mic.start();
  cnv.mousePressed(userStartAudio);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  let vol = mic.getLevel();
  if (vol > 0.1 && vol < 0.2) {
    stroke(152, 194, 254);
    strokeWeight(1);
    m = 20;
    n = 20;
  }
  else if(vol > 0.2){
    stroke(205, 255, 255);
    strokeWeight(1);
    m = 10;
    n = 10;
  }
  else {
    stroke(49, 133, 252);
    strokeWeight(1);
    m = 40;
    n = 40;
  }

  for(let i=20;i<100;i++){
  var x = random(windowWidth);
  var y = random(windowHeight);
  var c = capture.get(x,y);
 
  fill(c);
  triangle(x, y, x+n, y, x, y+m);
  
  image(capture, 200, 200, 100, 100);
}
}
function saveImage() {
  saveCanvas('myCanvas', 'png');
 }