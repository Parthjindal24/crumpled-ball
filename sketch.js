
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;
var ground;
var leftSide,rightSide,bottomSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
    paper = new Paper(100,500,20);
	
ground = new Ground(400,580,800,10);



leftSide = new Dustbin(550,520,20,100)
rightSide = new Dustbin(610,560,100,20)
bottomSide = new Dustbin(670,520,20,100)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display();
ground.display();

leftSide.display();
rightSide.display();
bottomSide.display();

 
}
function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:59,y:-59});

}


}