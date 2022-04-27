const sketchWidth = 400
const sketchHeight = 400

let lengthHexagon 
let strokeColor 
let strokeWeight 
let hexagonFill 
 

function preload(){
  // preload assets
}

function setup() {
  createCanvas(sketchWidth,sketchHeight);

  lengthHexagon = 20
  strokeColor = color( 255,255,50 )
  strokeWeight = strokeWeight( 5 )
 
}

function draw() {
  background(255);

  stroke( 0 )
  strokeWeight( strokeWeight )
  fill( hexagonFill)

 beginShape();
 //for( let x = lengthHexagon/2 ; x <= sketchWidth ; x += 2 * lengthHexagon ){
 //  for( let y = 0 ; y <= sketchHeight ; y += 2 * Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) ){

    vertex( lengthHexagon/2 , 0 )
    vertex( 3 * lengthHexagon/2 , 0 )
    vertex( 2 * lengthHexagon , Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) )
    vertex( 3 * lengthHexagon/2 , 2 * Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) )
    vertex( lengthHexagon/2 , 2 * Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) )
    vertex( 0 , Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) )

 endShape( close )
}