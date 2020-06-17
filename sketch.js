//var helicopterIMG, helicopterSprite, packageSprite,packageIMG 
var rect1,rect2,rect3;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	//helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 20,20);
	packageSprite.circle = Matter.circle;

	//helicopterSprite=createSprite(width/2, 200, 10,10);
	//helicopterSprite.addImage(helicopterIMG)
	//helicopterSprite.scale=0.6

	rect1 = createSprite(400,650,200,20,{isStatic:true});

	rect2 = createSprite(300,620,20,100,{isStatic:true});
	
	rect3 = createSprite(500,620,20,100,{isStatic:true});

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y; 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    
    
  }
}



