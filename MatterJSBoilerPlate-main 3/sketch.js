
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObject,leftSide,rightSide

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var ballOptions={
		restitution:0.3
	}

	//Create the Bodies Here.
	ball=Bodies.circle(260,100,30,ballOptions)
	World.add(world,ball)
	groundObject=new Ground(width/2, 670, width, 20)
	leftSide=new Ground(1100,600,20,120)
	rightSide= new Ground(1350,600,20,120)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30,30)
  groundObject.show()
  leftSide.show()
  rightSide.show()
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
	}
}



