// setup() executes only once and at the very beginning
function setup() {
  createCanvas(800, 800);
  var bg = color('#fff');
  background(bg);
  noStroke();

  for (i = 1000; i > 0; i -= 40) {
    fill(bg);
    bg = lerpColor(bg, color('#FFFFFF'), .2);
    ellipse(400, 400, i);
  }
}

// draw() executes over and over once setup() has executed
function draw() {
  var skin = color('#9F5B2F');
  noStroke();
  ellipseMode(CENTER);

  // face
  noStroke();
  fill(skin);
  ellipse(width/2, height/1.8, 500, 450);

  // nose
  noStroke();
  fill('#693815');
  beginShape();
  ellipse(400, 485, 60);
  endShape(CLOSE);

let eyeMoveX = map(mouseX, 0, width, -15, 5);

  // eyes
  fill('white');
  ellipse(300, 420, 50, 50);
  ellipse(500, 420, 50, 50);
  fill('#111');
  ellipse(300 + eyeMoveX, 420, 15, 15);
  ellipse(500 + eyeMoveX, 420, 15, 15);

  // eye brow
  stroke('#1F0E03');
  strokeWeight(9);
  noFill();
  arc(300, 415, 80, 80, PI+.9, -.9);
  arc(500, 375, 80, 80, PI+.9, -.9);


  // lips
  strokeWeight(15);
  stroke('#693815');
  arc(400, 490, 150, 200, .9, PI-.9);
  noStroke();

    // ears
  fill(skin);
  ellipse(150, 450, 80, 100);
  ellipse(650, 450, 80, 100);

  console.log("mouseX="+mouseX+", mouseY="+mouseY);
}
