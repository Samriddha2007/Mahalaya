class Box_1 extends BaseClass1 {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("base.png");
      this.Visibility = 255;
    }
    score()
    {
       if(this.Visibility == 0)
       {
         score = score + 100;
       }
    }
    display()
    {
       if(this.body.speed < 3)
       {
       super.display();
       }
       else
       {
           World.remove(world,this.body);
           push();
           this.Visibility = this.Visibility - 5;
           tint(255,this.Visibility);
           image(this.image,this.body.position.x,this.body.position.y,50,50);
           pop();
           
           //console.log(this.Visibility);
           //console.log(this.body.speed);
       }
    }
  };