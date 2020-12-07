class Block {
  constructor(x,y,width,height) {

    var options = {
      isStatic = false,
      restitution: 0.8,
      friction: 1.0,
      density: 1.0
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    
    World.add(world,this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    if (this.body.speed < 3) {
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255,this.visibility);
      rect(this.body, this.body.position.x, this.body.position.x, 50, 50);
      pop();
    }
  }
}