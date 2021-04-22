
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	g1 = new Ground(400, 300, 350, 20);

	b1 = new Ball(250, 500, 20);
    s1 = new String(b1.body, {x:250, y:300})

	b2 = new Ball(300, 500, 20);	
    s2 = new String(b2.body, {x:300, y:300})

	b3 = new Ball(350, 500, 20);
    s3 = new String(b3.body, {x:350, y:300})

	b4 = new Ball(400, 500, 20);
    s4 = new String(b4.body, {x:400, y:300})

	b5 = new Ball(450, 500, 20);
    s5 = new String(b5.body, {x:450, y:300})

	b6 = new Ball(500, 500, 20);
    s6 = new String(b6.body, {x:500, y:300})
}


function draw() {
  rectMode(CENTER);
  background(150);

  g1.display();
  
  b1.display();
  s1.display();

  b2.display();
  s2.display();

  b3.display();
  s3.display();

  b4.display();
  s4.display();

  b5.display();
  s5.display();

  b6.display();
  s6.display();
  
  drawSprites();
 
}



