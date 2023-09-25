var cols;
var rows;
var scl = 20;
var w;
var h;

var flying=0;

var terrain=[];

function setup(){
  w = windowWidth;
  h = windowHeight;
  createCanvas(w,h, WEBGL);
  cols = w/2;
  rows = h/2;

  terrain = [];
    for (var x = 0; x < cols; x++) {
      terrain[x] = [];
    }
}



function draw(){

  flying -= 0.1;
   var yoff = flying;
   for (var y = 0; y < rows; y++) {
     var xoff = 0;
     for (var x = 0; x < cols; x++) {
       terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
       xoff += 0.2;
     }
     yoff += 0.2;
   }

    background(51);
    stroke(255);
    noFill();
    translate(50, 100);
    rotateX(PI/3);
    translate(-w*.75, -h/2);
    for( var i=0; i<rows; i++ ){
      beginShape(TRIANGLE_STRIP);
      for( var j = 0; j<cols; j++ ){
        push();
        translate(i*scl, j*scl, terrain[i][j]);
        vertex(i*scl, j*scl, terrain[i][j]);
        vertex(i*scl, (j+1)*scl, terrain[i][j+1]);
        if(i > 0){
          vertex(i*scl, j*scl, terrain[i][j]);
          vertex((i-1)*scl, j*scl, terrain[i-1][j]);
        }
        pop();
      }
      endShape();
    }

}
