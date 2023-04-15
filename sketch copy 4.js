var t;

function setup() {
  createCanvas(200, 200);
  background(0);
  strokeWeight(2);
  t = 1000;
}

function draw() {
  var x1 = width * noise(t * 1000);
  var x2 = width * noise(t + 425);
  var x3 = width * noise(t + 435);
  var x4 = width * noise(t + 445);
  var y1 = height * noise(t + 455);
  var y2 = height * noise(t + 465);
  var y3 = height * noise(t + 475);
  var y4 = height * noise(t + 485);
  stroke(random(0, 155), random(0, 155), random(0, 155));
  // bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
  quad(y1, x1, y2, x2, y3, x3, y4, x4);
  t += 0.005;
  fill(0);
  // clear the background every 500 frames using mod (%) operator
  if (frameCount % 500 == 0) {
	background(0);
  }
}