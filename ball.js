class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.width=50;
      this.height=50;
      this.body = Bodies.rectangle(x, y,this.width, this.height, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("red");
      stroke ("white");
      strokeWeight(5);
      rect(0 , 0 , this.width, this.height);
      pop ();
    }
  };