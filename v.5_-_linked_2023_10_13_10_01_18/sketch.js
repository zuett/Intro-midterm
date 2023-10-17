
function preload(){
  song = loadSound("v5l.mp3");

}
function setup() {
  createCanvas(700, 700, WEBGL)
  angleMode(DEGREES)

  song.play();
  song.loop();

  let a = createA('./../index.html', 'Back', '_self');
  a.position(33, 640);
}

function draw() {
  background(30)

  for(let a1 = 0; a1 < 180; a1 += 10 )
    { 
      beginShape(POINTS);
      
      for(let a2 = 0; a2<360; a2 += 10){ //a2 = theta
        
        let r2 = 20;
      
        let x = r2 * cos(a1) - 300;
        let y = r2 * sin(a1) * sin(a2) + 300;
        let z = r2 * sin(a1) * cos(a2);
        
        strokeWeight(1.5)
        stroke(255)
        vertex(x,y,z);      
      } 
     
    
      
    endShape(CLOSE);
    }
  
  // background(r, g, b);
  
  // rotateX(frameCount%360)

  noFill()

  for (var i = 0; i < 100; i++) {
    var r = map(sin(frameCount), -1, 1, 50, 255);
  var g = map(cos(frameCount / 2), -1, 1, 50, 255);
  var b = map(sin(frameCount / 9), -1, 1, 50, 255);

    stroke(r, g, b)

    rotate(frameCount / 50)

    beginShape()
    for (var j = 0; j < 360; j += 50) {
      var rad = i * 3
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = cos(frameCount * 1.4 + i * 2) * 75

      vertex(x, y, z)
    }
    endShape(CLOSE)
  }

  
}