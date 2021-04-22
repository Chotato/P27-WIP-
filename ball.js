class Ball extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    
  }
  display(){
    super.display();
     
    var pos =this.body.position;
      fill("white");
      circle(pos.x, pos.y, 50);
      super.display();
    
  }
}