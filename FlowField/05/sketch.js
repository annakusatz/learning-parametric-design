function preload(){
  // preload assets
}

var inc = 0.1
var scl = 5;
var cols , rows;
var canvasWidth = 200
var canvasHeight = 200

var particles = [ ]

function Particle () {
  this.pos = createVector ( 0 , 0 );
  this.vel = createVector ( 0 , 0 );
  this.acc = createVector ( 0 , 0 );

  this.update = function () {
    this.vel.add ( this.acc );
    this.pos.add ( this.vel );
    this.acc.mult ( 0 );
  }

  this.applyForce = function () {
    this.acc.add ( force );
  }

  this.show = function () {
    stroke ( 255 , 20 , 147 );
    point ( this.pos.x , this.pos.y );
  }

}

function setup() {

  var cnv = createCanvas ( canvasWidth , canvasHeight );
  var cnvx = ( windowWidth - canvasWidth ) / 2
  var cnvy = ( windowHeight - canvasHeight ) / 2;
  cnv.position ( cnvx , cnvy );
  

  cols = floor ( width / scl );
  rows = floor ( height / scl );

  particles [ 0 ] = new Particle ( );
 
}

function draw() {
  background(230);

  var yoff = 0;
  for ( var y = 0 ; y < rows ; y ++ ) {
    var xoff = 0;
    var zoff = 0;
    for ( var x = 0 ; x < cols ; x ++) {
      var index = ( x + y * width ) * 4;
      var r = noise ( xoff , yoff ) * 255;
      var angle = noise ( xoff , yoff , zoff ) * TWO_PI;
      var v = p5.Vector.fromAngle ( angle );
      xoff += inc;
      stroke ( 0 );
      push ( );
      translate ( x * scl , y * scl );
      rotate ( v.heading ( ) );
      line ( 0 , 0 , scl , 0 );
      pop ( );
    
    }
    yoff += inc;

    zoff += 0.001;
  }

  particles[ 0 ].update ( );
  particles[ 0 ].show ( );

  
}

