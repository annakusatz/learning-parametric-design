function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
  background( 245 , 218 , 155 );

}

function draw() {
 
  stroke ( 155 , 212 , 245 , 150 );
  strokeWeight ( 20 );
  for ( let x = 10 ; x <= 390 ; x += 40 ){
    line ( x , 0 , x , 400 );
  }

  stroke( 47 , 145 , 73 , 100 );
  for ( let y = 30 ; y <= 390 ; y += 40) {
    line ( 0 , y , 400 , y );
  }
 

  strokeWeight ( 10 );
  var a = 40;
  for ( var x = 20 ; x <= 440 ; x += 80 ){
    for ( var y = 20 ; y <= 440 ; y += 80 ){
      stroke( 204 , 0 , 0 , 120);
      line ( x-a , y+a , x+a , y-a );
      stroke ( 39 , 118 , 60 , 180);
      line ( x+a , y+a , x-a , y-a );
    }
  }
  noLoop()

}