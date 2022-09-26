function preload(){
  // preload assets
}

var inc = 0.01
var scl = 5;
var cols , rows;


function setup() {

  createCanvas( 200 , 200 );

  cols = floor ( width / scl );
  rows = floor ( height / scl );
 
}

function draw() {
  background(230);

  var yoff = 0;
  for ( var y = 0 ; y < rows ; y ++ ) {
    var xoff = 0;
    for ( var x = 0 ; x < cols ; x ++) {
      var index = ( x + y * width ) * 4;
      var r = noise ( xoff , yoff ) * 255;
      var v = p5.Vector.fromAngle ( 0 );
      xoff += inc;
      stroke ( 0 );
      push ( );
      translate ( x * scl , y * scl );
      rotate ( v.heading ( ) );
      line ( 0 , 0 , scl , 0 );
      pop ( );
    
    }
    yoff += inc
  }

}