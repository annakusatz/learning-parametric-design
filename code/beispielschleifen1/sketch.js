function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  var a = 20;
  for (var x = 0; x<=width; x += 50) {
    for (var y = 0; y <= height; y+=50) {
      line(x-a, y+a, x+a, y-a);
      line(x+a, y+a, x-a, y-a);
     // line(x, 0, x, height);
			//line(0, y, width, y);
      line(x-a, y+a, x+a, y-a);
      line(x+a, y+a, x-a, y-a);
    }
  }
}