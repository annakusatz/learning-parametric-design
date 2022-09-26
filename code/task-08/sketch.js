// from https://p5-demos.glitch.me/ und verändert damit es für die Wandnstllation funktioniert


let dragging = false;
let minFrequency = 0.5;
let maxFrequency = 2;
let minAmplitude = 0.05;
let maxAmplitude = 0.9;

let amplitude;
let frequency;

const simplex = noise(frameCount);

function setup () {
  createCanvas(600, 600);
  
  mouseX = width / 2;
  mouseY = height / 2;
}

// Render loop that draws shapes with p5
function draw (){
  background(240);
  
  const frequency = lerp(minFrequency, maxFrequency, mouseX / width);
  const amplitude = lerp(minAmplitude, maxAmplitude, mouseY / height);
  
  const dim = Math.min(width, height);
  
  noFill();
  stroke(0);
  strokeWeight(dim * 0.0075);
  
  const time = millis() / 1000;
  const rows = 1;

  // Draw each line
  for (let y = 0; y < rows; y++) {
    // Determine the Y position of the line
    const v = rows <= 1 ? 0.5 : y / (rows - 1);
    const py = v * height;
    drawNoiseLine({
      v,
      start: [ 0, py ],
      end: [ width, py ],
      amplitude: amplitude * height,
      frequency,
      time: time * 0.5,
      steps: 150
    });
  }

  // canvas so "zuschneiden", dass er auf die Maße der Wandinstallation passt
  
  strokeWeight ( 1 );
  stroke ( 255 );
  fill ( 255 );
  rect ( 0 , 0 , 600 , 330 );
  rect ( 0 , 530 , 600 , 70 );

  //saveFrames ( "out" , "png" , 3 , 9 , data => { print ( data )});
  
  noLoop ();
  save ("myImage.png");

}

function drawNoiseLine (opt = {}) {
  const {
    v,
    start,
    end,
    steps = 10,
    frequency = 1,
    time = 0,
    amplitude = 1
  } = opt;
  
  const [ xStart, yStart ] = start;
  const [ xEnd, yEnd ] = end;

  // Create a line by walking N steps and interpolating
  // from start to end point at each interval
  beginShape();
  for (let i = 0; i < steps; i++) {
    // Get interpolation factor between 0..1
    const t = steps <= 1 ? 0.5 : i / (steps - 1);

    // Interpolate X position
    const x = lerp(xStart, xEnd, t);
    
    // Interpolate Y position
    let y = lerp(yStart, yEnd, t);
    
    // Offset Y position by noise
    y += (noise(t * frequency + time, v * frequency, time)) * amplitude;
    
    // Place vertex
    vertex(x, y);
  }
  endShape();
}
