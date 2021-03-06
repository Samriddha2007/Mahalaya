class Slingshot
{
    constructor(body1,pointB)
    {
        var options = 
    {
        bodyA: body1,
        pointB: pointB,
        stiffness: 0.004,
        length: 10
    }
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    }
    fly()
    {
       this.sling.bodyA = null; 
    }
    attach(body)
    {
      this.sling.bodyA = body;
    }
    display()
    {
    if(this.sling.bodyA)
    {
      var pointA =   this.sling.bodyA.position;
      var pointB =   this.pointB;
      line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }
}