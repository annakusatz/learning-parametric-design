function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
  background ( 167 , 245 , 239 , 100 );
  frameRate( 20 )
}

function draw() {

  background ( 167 , 245 , 239 , 100 );
  
  stroke ( 255 , 231 , 1 );
  fill ( 255 , 231 , 1 );
  circle ( 200 , 200 , 50 );

  strokeWeight(random(2,3));

  beginShape();
    for(let angle = 0; angle < 360; angle += 15) {
     
     const radius = random( 50, 160);
     const iradius = random(40,80);
     
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);

    const ix = iradius * cos(Math.PI / 180 * angle);
    const iy = iradius * sin(Math.PI / 180 * angle);

    stroke(random(240,250),random(200,240),random(0,200)); 
    line( x+400/2 , y+400/2 , ix+400/2 , iy+400/2 );

  }
  endShape(CLOSE);

}

