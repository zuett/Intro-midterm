class Ball {
  constructor(locX = 100, locY = 100, movX = - 215, movY = -15 ) {
    this.x = locX;
    this.y = locY;
    this.movX = movX;
    this.movY = movY;
  }

   
display(){
    for(let a1 = 0; a1 < 180; a1 += 15 )
    { 
      beginShape(POINTS);
      
      for(let a2 = 0; a2<360; a2 += 15){ //a2 = theta
      
        let x = r2 * cos(a1) - this.x;
        let y = r2 * sin(a1) * sin(a2) - this.y;
        let z = r2 * sin(a1) * cos(a2);
        vertex(x,y,z);      
      } 
     
    endShape(CLOSE)
      
       image(img,this.x + this.movX ,this.y + this.movY,30,30)
      
    
    }
}
}