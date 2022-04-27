const sketchWidth = 400
const sketchHeight = 400

function preload(){
  // preload assets
}

function setup() {
  createCanvas(sketchWidth,sketchHeight);
 
}

function draw() {
  background(0);

  stroke(255)
  for(let x = 1; x<400; x+=40){
    for(let y = 1; y<400; y+=40){
      line(0,y,400,y)
    }
    line(x,0,x,400)
  }
  
  var a = 40;
  for (var x = 1; x<440; x +=40) {
    for (var y = 1; y<440; y+=40) {
      line(x-a, y+a, x+a, y-a);
      line(x+a, y+a, x-a, y-a);
    }
  }
  
}