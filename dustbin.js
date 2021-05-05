class dustbin{
    constructor(x,y,width,height,color){
    var options={
        isStatic:true
    }

    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body)


    this.image=loadImage("dustbingreen.png")

    this.width=width;
    this.height=height;
    
    }

    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
   
    rectMode(CENTER)
    imageMode(CENTER);
    fill("white")
    rect(this.body.position.x,this.body.position.y, this.width, this.height);
    pop();

}
}
