
function preload(){

  song = loadSound("v3.mp3");
}



function setup() {
  createCanvas(700, 700, WEBGL);

  song.play();
  song.loop();

  angleMode(DEGREES);
  let a = createA('./../index.html', 'Back', '_self');
  a.position(33, 640);
  
}

function draw() {
  background(30);


  for(let a1 = 0; a1 < 180; a1 += 9 )
    { 
      beginShape(POINTS);
      
      for(let a2 = 0; a2<360; a2 += 9){ //a2 = theta
        
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
      rotateX(60)

  for(var i = 0; i<20; i++){
     
    // rotateX(60)
    noFill()
    strokeWeight(3)
    
    
    
    beginShape()
    for(var j=0; j<360; j+=5)
      {
        
        var r = map(sin(frameCount), -1, 1, 50, 255);
        var g = map(cos(frameCount / 2), -1, 1, 50, 255);
        var b = map(sin(frameCount / 9), -1, 1, 50, 255);
          stroke(r,g,b)
        
          var rad = i * 8;
          var x = rad * cos(j) * i/2;
          var y = rad * sin(j) * i/2;
          var z = sin(frameCount + i * 10) * 50;
          
          vertex(x,y,z);
        
      
      
      }
    
    
    endShape(CLOSE);
    
    
  }

    
  
  
  
}