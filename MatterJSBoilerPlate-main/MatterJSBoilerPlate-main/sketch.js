
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic: false,
		restitution: 1,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	parado = {
		isStatic: true
	}

	mexendo = {
		restitution: 1
	}

	ground = Bodies.rectangle(450, 490, 900, 20, parado);
	World.add(world, ground); 

	lixeira1 = Bodies.rectangle(650, 450, 10, 70, parado);
	World.add(world, lixeira1);

	lixeira2 = Bodies.rectangle(800, 450, 10, 70, parado);
	World.add(world, lixeira2);

	ball = Bodies.circle(50, 300, 20, mexendo);
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  fill("black");
  rect(ground.position.x, ground.position.y, 900, 20);
  
  fill("white");
  ellipse(ball.position.x, ball.position.y, 40);

  fill("black");
  rect(lixeira1.position.x, lixeira1.position.y, 10, 70);

	fill("black");
	rect(lixeira2.position.x, lixeira2.position.y, 10, 70)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball, {x:0, y:0}, {x:0.02, y:-0.02});
	}
}



