function preload(){
  song = loadSound("v.4.mp3");

}




function setup() {
  createCanvas(700, 700);

  song.play();
  song.loop();
  
  let a = createA('./../index.html', 'Back', '_self');
  a.position(33, 640);

  angleMode(DEGREES);
}

function draw() {
  // background(220);

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

  for (i = 0; i < 700; i += 50) {
    for (j = 0; j < 700; j += 50) {
      x = frameCount % j;
      y = 90 * sin(frameCount * 2) + i;

      noStroke();
      var r = map(sin(frameCount), -1, 1, 50, 255);
      var g = map(cos(frameCount / 2), -1, 1, 50, 255);
      var b = map(sin(frameCount / 9), -1, 1, 50, 255);

      fill(r, g, b);
      circle(x, y, 20);
    }
  }

  // function keyTyped() {
  //   //by shahd
  //   if (key === "s") {
  //     save("myCanvas.jpg");
  //   }
  // }


  
}
