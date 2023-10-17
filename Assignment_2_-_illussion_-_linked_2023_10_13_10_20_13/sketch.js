
function preload(){
  song = loadSound("song2.mp3");
}


function setup() {
  createCanvas(700, 700);

  song.play();
  song.loop();

  let a = createA('./../index.html', 'Back', '_self');
  a.position(33, 640);
  
  rectMode(CENTER);
  angleMode(DEGREES);
  
}

function draw() {
  
    // changing background color
      var r = map(sin(frameCount), -1, 1, 50, 255)
      var g = map(cos(frameCount /2), -1, 1, 50, 255)
      var b = map(sin(frameCount /9), -1, 1, 50, 255)
  background(r,g,b);
  noFill();
  
  // posisiton of the rect
  translate(width/2, height/2);
  
  for(var i = 0; i < 200; i++)
    {
      
      push()
      //rotation (100 is the rotation speed)
      rotate(sin(frameCount + i ) * 100)
      
      // rect stroke colors
      var r = map(sin(frameCount), -1, 1, 50, 255)
      var g = map(cos(frameCount /6), -1, 1, 50, 255)
      var b = map(sin(frameCount /2), -1, 1, 50, 255)
      
      stroke(r,g,b)
      
      rect(0, 0, 600 - i * 3, 600 -i * 3, 200 - i)
      //try the below for a different unique pattern
        // rect(0, 0, 600 - i * 3, 200 -i * 3, 200 - i) 
      
      
      // rect(0, 0, 136 - i * 3, 136 -i * 3, 200 - i)
      // //try the below for a different unique pattern
      //   rect(0, 0, 554 - i * 3, 554 -i * 3, 200 - i) 
      pop()
    }
  
    for(let a1 = 0; a1 < 180; a1 += 10 )
    { 
      beginShape(POINTS);
      
      for(let a2 = 0; a2<360; a2 += 10){ //a2 = theta
        
        let r2 = 20;
      
        let x = r2 * cos(a1) - 300;
        let y = r2 * sin(a1) * sin(a2) + 300;
        let z = r2 * sin(a1) * cos(a2);
        
        strokeWeight(1.5)
        stroke(199, 80, 88)
        vertex(x,y,z);      
      } 
     
    
      
    endShape(CLOSE);



  }
}
