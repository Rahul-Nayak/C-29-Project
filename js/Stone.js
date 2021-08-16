class Stone{
    constructor(x,y,r){
var options= {
    restitution:1,
}
       
          this.body = Bodies.circle(x,y,r,options);
          this.r = r;
          World.add(world,this.body);
      }
      show() {
          var pos = this.body.position;
          push();
          ellipseMode(CENTER);
          stroke(255);
          fill("white");
          ellipse(pos.x,pos.y,this.r);
          pop();
      }
    }