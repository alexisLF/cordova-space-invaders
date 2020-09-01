function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.r = 16;
 this.toDelete = false;

  this.xdir = 1;

  this.getR = function(){
    return this.r;
  }

  this.grow = function() {
    if(this.r>1){    this.r=this.r-2;
}
    }
  

   this.evaporate = function() {
    this.toDelete = true;
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += 16;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.show = function() {
    noStroke();
    fill(255, 0, 200, 150);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

}