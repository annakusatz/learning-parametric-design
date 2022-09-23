function preload(){
  // preload assets
}

// Wie detailliert (wie schnell nach dem alten Punkt ein 
//neuer Punkt mit neuer Richtung ausgewählt wird)
var inc = 0.1;

//Wie viele Rasterpunkte (wie detailliert aber weniger 
//"Schleifchen", als oben)
var scl = 5;
var cols , rows;

//Größe des Canvas
var canvasWidth;
var canvasHeight;
var flowfield ;

var zoff = 0;

var particles = [ ];

let slider1;
let slider2;


function Particle () {
  this.pos = createVector ( random( canvasWidth ) , random( canvasHeight) );
  this.vel = createVector ( 0 , 0 );
  this.acc = createVector ( 0 , 0 );

  //Geschwindigkeit der Partikel
  this.maxspeed = 2;

  this.prevPos = this.pos.copy();

  this.update = function () {
    this.vel.add ( this.acc );
    this.vel.limit( this.maxspeed )
    this.pos.add ( this.vel );
    this.acc.mult ( 0 );
  }

  this.follow = function ( vectors ) {
    var x = floor ( this.pos.x / scl );
    var y = floor ( this.pos.y / scl );
    var index = x + y * cols;
    var force = vectors [ index ];
    this.applyForce ( force );
  }

  this.applyForce = function ( force ) {
    this.acc.add ( force );
  }


  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function ( ){
    if ( this.pos.x > canvasWidth ) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if ( this.pos.x < 0 ) {
      this.pos.x = canvasWidth;
      this.updatePrev();
    }
    if ( this.pos.y > canvasHeight ) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if ( this.pos.y < 0 ) {
      this.pos.y = canvasHeight;
      this.updatePrev();
    }
  }

  //Wie sollen Partikel gezeigt werden
  this.show = function () {
    stroke ( 0 , 5 );
    strokeWeight( 1 );
    line( this.pos.x , this.pos.y , this.prevPos.x , this.prevPos.y );
    this.updatePrev();
  }

}


function setup() {

   // canvas Width
   slider1 = createSlider( 0 , 1000 , 200 , 100 )
   slider1.position( 0 , slider2.value() + 50 )
   // canvas Height
   slider2 = createSlider( 0 , 1000 , 200 , 100 )
   slider2.position( 0 , slider2.value() + 100 )

  var cnv = createCanvas ( slider1.value() , slider2.value() );
  var cnvx = ( windowWidth - canvasWidth ) / 2
  var cnvy = ( windowHeight - canvasHeight ) / 2;
  //cnv.position ( cnvx , cnvy );
  
  var button = createButton( "Reset");
  button.mousePressed( resetSketch );

  cols = floor ( width / scl );
  rows = floor ( height / scl );

  particles [ 0 ] = new Particle ( );

  //Anzahl der Partikel
  for ( var i = 0 ; i < 1000 ; i ++ ) {
    particles [ i ] = new Particle ( );
  }

  flowfield = new Array ( cols * rows );

  //Hintergrundfarbe
  background(255)

  // canvas Width
  slider1 = createSlider( 0 , 1000 , 200 , 100 )
  slider1.position( 0 , slider2.value() + 500 )
  // canvas Height
  slider2 = createSlider( 0 , 1000 , 200 , 100 )
  slider2.position( 0 , slider2.value() + 400 )
 
}

function resetSketch() {

}

function draw() {

  var yoff = 0;
  for ( var y = 0 ; y < rows ; y ++ ) {
    var xoff = 0;
    for ( var x = 0 ; x < cols ; x ++) {
      var index = x + y * cols ;

      //
      var angle = noise ( xoff , yoff , zoff ) * TWO_PI * 4;
      var v = p5.Vector.fromAngle ( angle );
      v.setMag ( 1 );
      flowfield [ index ] = v;
      xoff += inc;
      //stroke ( 255, 20, 147 );
      //strokeWeight ( 1 );
      //push ( );
      //translate ( x * scl , y * scl );
      //rotate ( v.heading ( ) );
      //line ( 0 , 0 , scl , 0 );
      //pop ( );
    
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for ( var i = 0 ; i < particles.length ; i ++ ) {
    particles[ i ].follow ( flowfield );
    particles[ i ].update ( );
    particles[ i ].edges ( );
    particles[ i ].show ( );
  }

  
}

