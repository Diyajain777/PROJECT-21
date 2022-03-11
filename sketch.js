
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
	
}

function setup() {
	createCanvas(1200, 700);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:1,
		friction:0,
		density:1.2
	}

	ball=Bodies.circle(300,200,20,ball_options)
	World.add(world,ball)

	ground=new Ground(600,680,1200,20)
	w1=new Ground(700,630,20,100)
	w2=new Ground(900,630,20,100)

	Engine.run(engine);
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:50})
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

  ground.show()
  w1.show()
  w2.show()
  
  
  drawSprites();
 
}



