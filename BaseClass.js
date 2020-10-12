
class BaseClass 
{
    constructor(x,y,height)
   {
      var options = 
      {
          //'isStatic' : false,
          'restitution' : 0.8,
          'friction': 1.0,
          'density':1.0,
          //'mass': 6800
      }
      this.body = Bodies.rectangle(x,y,70,height,options);
      this.radius = 50;
      this.height = height;
    //  this.image = loadImage("paper.png");
     
      World.add(world,this.body);
      
   }
   display()
   {
    var pos = this.body.position;
   
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    fill("red");
    ellipse(0,0,this.radius,this.height);
    pop();
   }
}
