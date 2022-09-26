function preload(){
  // preload assets
}

var canvasWidth = 100;
var canvasHeight = 300;

function setup() {
  createCanvas( canvasWidth , canvasHeight );
 
}

function draw() {

  background(240);

  stroke ( 0 );
  noFill ( );
  strokeWeight ( 3 );

  /*beginShape ();
  vertex ( random ( 0 , 100 ) , 0 );
  bezierVertex ( random ( 0 , 100 ) , random ( 0 , 300 ) , random ( 0 , 100 ) , random ( 0 , 300 ), random ( 0 , 100 ) , 300 );
  endShape ();*/

  beginShape ();
  var yoff = 0;
  var zoff = 0;
  for ( var y = 0 ; y < canvasHeight ; y ++ ){
    stroke ( 0 );
    var x = noise ( yoff ) * canvasWidth ; 
    vertex ( x , y ); 
    yoff += 0.007;
  }
  endShape ();

}