function preload(){
  // preload assets
}

var canvasWidth = 100
var canvasHeight = 300

function setup() {
  createCanvas( canvasWidth , canvasHeight );
 
}

function draw() {

  background(240);

  stroke ( 0 );
  noFill ( );
  strokeWeight ( 2 );

  beginShape ();
  vertex ( random ( 0 , 100 ) , 0 );
  bezierVertex ( random ( 0 , 100 ) , random ( 0 , 300 ), random ( 0 , 100 ) , random ( 0 , 300 ) ,random ( 0 , 100 ) , 300 );
  endShape ();

  frameRate( 1 )

}