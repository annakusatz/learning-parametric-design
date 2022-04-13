function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);

 stroke(255,255,0);
 fill(255,255,0);
 circle(200,200,300);

 stroke(0,0,139)
 fill(0,0,139);
 arc(200,200,
     300,300,
     Math.PI/180*0,
     Math.PI/180*180,
     PIE 
     );

  triangle(50,200,350,200,200,50)

  stroke(255,255,0)
  fill(255,255,0)
  triangle(50,200,350,200,200,350)

  triangle(200,50,195,200,205,200)

  stroke(0,0,139)
  fill(0,0,139)
  triangle(200,350,195,200,205,200)
 

}