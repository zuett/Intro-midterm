
function preload(){
  song = loadSound("v1.mp3");
}




function setup() {
  createCanvas(700,700, WEBGL);

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
        
        strokeWeight(1.9)
        stroke(255)
        vertex(x,y,z);      
      } 
     
    
      
    endShape(CLOSE);
    }

      rotateX(60)
orbitControl(4,4)
  for(var i = 0; i<10; i++){
     
    rotateX(60)
    noFill()
    strokeWeight(3)
    
    
    
    beginShape()
    for(var j=0; j<360; j+=50)
      {
        
        var r = map(sin(frameCount), -1, 1, 50, 255);
        var g = map(cos(frameCount / 2), -1, 1, 50, 255);
        var b = map(sin(frameCount / 9), -1, 1, 50, 255);
          stroke(r,g,b)
        
          var rad = i * 8;
          var x = rad * cos(j) * i;
          var y = rad * sin(j) * i;
          var z = sin(frameCount + i * 10) * 50;
          
          vertex(x,y,z);
        
        
        // stroke(200,250,90)
        // ellipse(x/2,y/2,z)
      
      }
    
    
    endShape(CLOSE);
    
    
  }

    
  
  
  
  
}