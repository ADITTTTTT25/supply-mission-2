class box{

    constructor(x,y,width,height){
    var options = {isStatic:true};
    this.w=width;
    this.h=height;
    this.body=Bodies.rectangle(x,y,20,200,options)
    World.add(world,this.body)
    }

  display(){

    var pos = this.body.position;
    fill("red");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.w,this.h);
        
  }
    

}