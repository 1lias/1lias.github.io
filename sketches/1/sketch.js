let sketch = function(p) {

  let rings = 2;  

  p.setup = function(){
    p.createCanvas(840, 840);
    p.strokeWeight(2);
    p.stroke(17,17,17);
    p.noFill();
  }

  p.draw = function() {
    p.clear();
    p.background(255,240,250)
    p.translate(50,50)
    for(let i = 0; i < 8; i++){
      for(let j=0; j < 8; j++){
        display(i*100,j*100);
      }
    }  
  }

  function display(x, y) {
    for(let i = 0; i < rings; i ++){
      p.translate(20, 0);
      p.circle(x+10, y+10, 20 + i*20);
      p.translate(0, 20);
      p.circle(x+10, y+10, 20 + i*20);
      p.translate(-20, 0);
      p.circle(x+10, y+10, 20 + i*20);
      p.translate(0, -20);
      p.circle(x+10, y+10, 20 + i*20);
    }
  }

}

new p5(sketch);