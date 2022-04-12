function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(205,55,0);

  stroke(255)
  fill(255)
  arc(200,200,198,198,Math.PI/180*90,Math.PI/180*270,PIE)

  stroke(0)
  fill(0)
  arc(200,200,132,132,Math.PI/180*90,Math.PI/180*270,PIE)

  stroke(92,172,238)
  fill(92,172,238)
  arc(200,200,198,198,Math.PI/180*270,Math.PI/180*90,PIE)

  stroke(255,215,0)
  fill(255,215,0)
  arc(200,200,132,132,Math.PI/180*270,Math.PI/180*90,PIE)

  stroke(255,140,105)
  fill(255,140,105)
  arc(200,200,66,66,Math.PI/180*270,Math.PI/180*90,PIE)

  arc(200,200,5,5,Math.PI/180*90,Math.PI/180*270,PIE)

  stroke(0)
  fill(0)
  arc(200,200,5,5,Math.PI/180*270,Math.PI/180*90,PIE)
}