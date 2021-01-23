const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(400,300,20,20);
	dustbin1 = new Dustbin(650,700, 170, 20);
	dustbin2 = new Dustbin(575,700,20,170);
	dustbin3 = new Dustbin(725,700,20,170)
	ground = new Ground(400,700,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
 
  
 
}

function keypressed() {
	if (keyCode === UP_ARROW) {  
		Matter.Body.applyForce(paper.body, paper.body.position, {
			x:85,
			y:-85
		});
	}
}

