
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper1;
var ground;
var dustbin1,dustbin2,dustbin3;
var world;


function preload()
{
	dustbinImg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1300, 650);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(200,450,25);
	ground = new Ground(width/2,620,width,20);
	dustbin1 = new dustbin(1200,510,20,200);
	dustbin2 = new dustbin(1000,510,20,200);
	dustbin3  =new dustbin(1100,600,219,20);
	



	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  imageMode(CENTER)
  image(dustbinImg,dustbin3.body.position.x,dustbin3.body.position.y-80,250,200)
  
  

  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}


function keyPressed(){
if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:264,y:-450})
	}
}



