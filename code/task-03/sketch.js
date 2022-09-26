function preload(){
  // preload assets
}

var canvasWidth = 400
var canvasHeight = 400

function setup() {
  createCanvas ( canvasWidth , canvasHeight );
  background( 255 );

}

function draw() {

  // Dreieck schwarz
  stroke ( 0 );
  fill ( 0 );
  triangle( 0 , 400 , 400 , 400 , 400 , 0 );

  // Kreis schwarz
  arc ( 200 , 200 , 
        200 , 200 , 
        Math.PI/180*135 , Math.PI/180*315 , CHORD);

  // Kreis weiß
  stroke ( 255 );
  fill ( 255 );
  arc ( 200 , 200 , 
        200 , 200 , 
        Math.PI/180*315 , Math.PI/180*135 , CHORD);

  // Dreieckspfeile weiß
  stroke ( 0 );
  for( let y = 26.6 ; y <= 372.4 ; y += 53.2 ){
    triangle ( 200 - 13.3 , y , 200 + 13.3 , y , 200 , y + 26.6);
  }

  // Kreise 1
  fill ( 0 );
  circle ( 14.28 + 14.28/2 , 200 , 14.28 );

  // Kreise 2
  circle ( 14.28*4 + 14.28/2 , 200 , 14.28*3 );

  // Kreise 3
  stroke ( 255 );
  fill ( 255 );
  circle ( 300 + 14.28*2 + 14.28/2 , 200 , 14.28*3 );

  // Kreise 4
  circle ( 300 + 14.28*5 + 14.28/2 , 200 , 14.28);
  


 
}