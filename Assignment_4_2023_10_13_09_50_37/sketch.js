let names;
let sampleName;

let num1;
let num2;

let alpha1;
let alpha2;

function preload() {
  createCanvas(windowWidth, windowHeight);

  song = loadSound("assignment4.mp3");

  rectMode(CENTER);
  angleMode(DEGREES);
  names = loadTable("names.csv", "csv", "header");
}

function setup() {
  createCanvas(700, 700);

  song.play();
  song.loop();
  
  let a = createA('./../index.html', 'Back', '_self');
  a.position(33, 640);

  let alphabet = names.getColumn("alphabet");
  let frequency = names.getColumn("freq");

  sampleName = "P,M";

  let splitString = split(sampleName, ",");

  alpha1 = splitString[0];
  alpha2 = splitString[1];
}

function draw() {
  
  
  
  
  // changing background color
  var r = map(sin(frameCount), -1, 1, 50, 255);
  var g = map(cos(frameCount / 2), -1, 1, 50, 255);
  var b = map(sin(frameCount / 9), -1, 1, 50, 255);
  background(r, g, b);
  noFill();

  // posisiton of the rect
  translate(width / 2, height / 2);

  for (var i = 0; i < 200; i++) {
    push();
    //rotation (100 is the rotation speed)
    rotate(sin(frameCount + i) * 100);

    // rect stroke colors
    var r = map(sin(frameCount), -1, 1, 50, 255);
    var g = map(cos(frameCount / 6), -1, 1, 50, 255);
    var b = map(sin(frameCount / 2), -1, 1, 50, 255);

    stroke(r, g, b);

    num1 = getValue(alpha1);
    num2 = getValue(alpha2);

    // the 2 layers of animation
    rect(0, 0, num1 - i * 3, num2 - i * 3, 200 - i);
    rect(0, 0, num2 - i * 3, num1 - i * 3, 200 - i);

    pop();
      
    
  }
  
  
  //ball 
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
  
  
  
}

function getValue(targetAlphabet) {
  let alphabet = names.getColumn("alphabet");
  let frequency = names.getColumn("freq");
  let rowNum = names.getRowCount();

  for (let i = 0; i < rowNum; i++) {
    if (alphabet[i] === targetAlphabet) {
      return frequency[i];
    }
  }
}

// function myInputEvent() {

//   console.log('you are typing: ', this.value());
// }
