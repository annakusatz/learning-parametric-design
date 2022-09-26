function preload(){
  // preload assets
}

var canvasHeight = 400
var canvasWidth = 400

var squareWidth = 20


function setup() {
  createCanvas( canvasWidth , canvasHeight );
  background(100);
}

function draw() {


  stroke ( 0 );
  fill ( 255,20,147 )

  for( let x = 0 ; x <= canvasWidth ; x += 20 ){
    for( let y = 0 ; y <= canvasHeight ; y += 20 ){
      fill ( random( 150 , 255 ), random( 255 ), random( 150 , 255 ))
      square( x , y , 20 );
    } 
  }

}