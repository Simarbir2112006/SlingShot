class Target {
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
            
        }
        this.width=30;
        this.height=30;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
        }
      display(){
        var pos =this.body.position;
        push ();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(random(0,255),random(0,255),random(0,255));
        stroke ("white");
        strokeWeight(5);
        rect(0 , 0 , this.width, this.height);
        pop ();
      }
}