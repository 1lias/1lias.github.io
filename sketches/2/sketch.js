// Maurer Rose
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingInTheCabana/002-collatz-conjecture.html
// https://youtu.be/4uU9lZ-HSqA
// https://editor.p5js.org/codingtrain/sketches/qa7RiptE9

let n = 1;
let d = 3;
var sliderN; 
var sliderD; 

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  sliderD = createSlider(1,100,1,0.1);
  sliderD.position(10, height - 50);
  sliderD.style('width', '200px');
  sliderN = createSlider(1,100,4,0.1);
  sliderN.position(10, height - 30);
  sliderN.style('width', '200px');
}

function draw() {
  d = sliderD.value();
  n = sliderN.value();

  background(234,200,200);
  translate(width / 2, height / 2);
  stroke(17,17,17);
  noFill();
  beginShape();
  strokeWeight(2);
  for (let i = 0; i <= d * 360; i=i+0.1) {
    let k = n / d;
    let r = 300 * cos(k * i);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape();
}
