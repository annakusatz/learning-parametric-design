let lengthHexagon 
let colorhexagon
let colorstroke
let strokeweight1
function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);

  lengthHexagon = 30
  colorstroke = color(255,255,100)
  strokeweight1 = strokeWeight( 3 )
  //colorhexagon = color(random(230,255),200,0)
  
  frameRate(3)
 
}

function draw() {
  background(0);

  stroke(255,255,100)
  strokeWeight(strokeweight1)
  //fill(colorhexagon)

  
  for(let x = 0 ; x <= 4 ; x += 1){
   for(let y = 0 ; y <= 8 ; y += 1){
     const offsetX = x * 3 * lengthHexagon + lengthHexagon/2
     const offsetY = y * 2 * Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2))

     colorhexagon = color(random(200,255),random(100,200),0)
     fill(colorhexagon)

      beginShape();
      vertex( lengthHexagon/2 + offsetX , 0 + offsetY  )
      vertex( 3 * lengthHexagon/2  + offsetX , 0 + offsetY )
      vertex( 2 * lengthHexagon + offsetX , Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) + offsetY )
      vertex( 3 * lengthHexagon/2  + offsetX , 2 * Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) + offsetY )
      vertex( lengthHexagon/2 + offsetX , 2 * Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) + offsetY )
      vertex( 0 + offsetX, Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) + offsetY )
      endShape(CLOSE);
    }
  }

  for(let x = 0 ; x <= 4 ; x += 1){
    for(let y = 0 ; y <= 4 ; y += 1){
      const offsetXx = x * 3 * lengthHexagon - lengthHexagon
      const offsetYy = y * 2 * Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) - Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2))

    colorhexagon = color(random(200,255),random(100,200),0)
     fill(colorhexagon)


      beginShape()
      vertex( - lengthHexagon + offsetXx , - Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) + offsetYy )
      vertex( 0 + offsetXx , - Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) + offsetYy )
      vertex( lengthHexagon/2 + offsetXx , 0 + offsetYy )
      vertex( 0 + offsetXx , Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) + offsetYy )
      vertex( - lengthHexagon + offsetXx , Math.sqrt( Math.pow(lengthHexagon,2) - Math.pow(lengthHexagon/2,2)) + offsetYy )
      vertex( - 3 * lengthHexagon/2 + offsetXx , 0 + offsetYy )
      endShape( CLOSE )
    }
  }
    
}