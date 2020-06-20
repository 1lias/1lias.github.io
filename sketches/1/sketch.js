let rings = 60;  



function setup() {
  createCanvas(1600, 1600);
  strokeWeight(2);
  stroke(17,17,17);
  noFill()
}

function draw() {
  clear();
  background(255,240,250);
  translate(width / 2, height / 2);
  displayCirc();
  displayRect();
}


function displayCirc() {
  for(let i = 0; i < rings; i ++){
    noFill();
    stroke(17,17,17);
    circle(0, 0, 20 + i*20);    
  }
}

function displayRect() {
  for(let i = 0; i < rings*10; i ++);
    fill(0)
    noStroke()
    rect(40, -20, 520, 40);
}

save("processing1.png");
