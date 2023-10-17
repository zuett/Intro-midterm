let r = 200; // r represents the size
let r2 = 20;

let img;
let song;
function preload() {
  img = loadImage("qmark.png");
  song = loadSound("song.mp3");
}
function setup() {
  createCanvas(700, 700, WEBGL);
  angleMode(DEGREES); // degrees for easier calculations
  colorMode(HSB); // Hue, Saturation, Brightness

  frameRate(30);
  stroke(199, 80, 88);
  strokeWeight(3);
  noFill();

  song.play();
  song.loop();

  //column 1
  ball1 = new Ball(100, 100);
  ball2 = new Ball(100, 0);
  ball3 = new Ball(100, -100);
  
   //column 2
  ball4 = new Ball(0, 100, -15);
  ball5 = new Ball(0, -100, -15);
  
   //column 3
  ball6 = new Ball(-100, 100, 185);
  ball7 = new Ball(-100, 0, 185);
  ball8 = new Ball(-100, -100, 185);
}

function draw() {
  //rotate only if mouse is outside the main circle
  if (mouseX > 600 || mouseX < 100 || mouseY > 600 || mouseY < 100) {
    rotateX(frameCount % 360); // camera rotation
    rotateY(frameCount % 360);
    
    //first column
    let a = createA('./V.3_-_linked_2023_10_13_09_45_48/index.html', '.    .');
    // ./../V.3_-_linked_2023_10_13_09_45_48/index.html

    let b = createA('./V.1_-_linked_2023_10_13_09_59_40/index.html', '.    .');
    let c = createA('./v.5_dynamic_2023_10_13_10_03_40/index.html', '.    .');
    
    a.position(245,240);
    b.position(245,340);
    c.position(245,440);
    
    //second column
    let d = createA('./v.4_special_-_linked_2023_10_13_10_00_46/index.html', '.    .');
    let e = createA('./v.5_-_linked_2023_10_13_10_01_18/index.html', '.    .');
  
    d.position(345,240);
    e.position(345,440);
    
    //third column
    
    let f = createA('./v.6_-_linked_2023_10_13_10_01_56/index.html', '.    .');
    let g = createA('./Assignment_2_-_illussion_-_linked_2023_10_13_10_20_13/index.html', '.    .');
    let h = createA('./Assignment_4_2023_10_13_09_50_37/index.html', '.    .');
    
    f.position(445,240);
    g.position(445,340);
    h.position(445,440);
    
    
    
    
  }  
  
  

  background(230, 50, 17);

  // orbitControl(4, 4); // allows rotation + value 4 is for the speed of the rotation or perhaps how much the camera rotates per "mouse swipe"

  for (let a1 = 0; a1 < 180; a1 += 10) {
    //a1 = phi
    beginShape(POINTS);
    for (let a2 = 0; a2 < 360; a2 += 10) {
      //a2 = theta

      let x = r * (1 + 1 * sin(a2 * 6) * cos(a1 * 9)) * cos(a1);
      let y = r * (1 + 1 * sin(a2 * 6) * cos(a1 * 9)) * sin(a1) * sin(a2);
      let z = r * (1 + 1 * sin(a2 * 6) * cos(a1 * 9)) * sin(a1) * cos(a2);
      vertex(x, y, z);
    }
    endShape(CLOSE);

    //displaying the selection balls
    let Balls = [ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8];

    for (let i = 0; i < Balls.length; i++) {
      //runs through the balls array and displays each obj
      Balls[i].display();
    }
  }
}

// function keyPressed(key) {
//     console.log("hi, ",key.key);
//     if (song.isPlaying() && key.key=='s')  {
//       song.stop();
//     } else if(!song.isPlaying() && key.key=='p'){
//       song.play();
//       song.loop();
//     }
// }
