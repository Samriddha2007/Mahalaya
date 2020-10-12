class Polygon extends BaseClass
{
    constructor(x,y,height)
    {
    super(x,y,50,height);
    this.smokeIMG = loadImage("smoke.png");
    this.path = [];
    }
    display()
    {
        super.display();
    if(this.body.position.x > 100 && this.body.velocity.x > 12)
    {

    var position = [this.body.position.x,this.body.position.y];
    this.path.push(position);

    }

   for(var i = 0; i < this.path.length; i++)
   {
     image(this.smokeIMG,this.path[i][0], this.path[i][1]);
   }

   }
}