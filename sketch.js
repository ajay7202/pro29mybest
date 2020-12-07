// Namespacing modules from Matter.js library
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;

var a1,a2,a3,a4,a5,a6,ground;
var slingshot,polygon1;

function setup() {
  createCanvas(1200,400);
  // Create the engine
  engine= Engine.create();
  world=engine.world;

  //  x position of the right most box
 var boxXPosition = 740;
 // create new box objects with 50 px of width and 50 px of height
  a1 = new Box(boxXPosition-50, 200, 50, 50); 
  a2 = new Box(boxXPosition-350, 200, 50, 50);
  a3 = new Box(boxXPosition-100, 200, 50, 50);
  a4 = new Box(boxXPosition-150, 200, 50, 50);
  a5 = new Box(boxXPosition-200, 200, 50, 50);
  a6 = new Box(boxXPosition-250, 200, 50, 50);
  a7 = new Box(boxXPosition-300, 200, 50, 50);
  polygon1 = new Polygon(40,300,30,30);
  // create a new ground object
  ground=new Ground(550,225,400,20);
}

function draw() {
  // update the Matter.js engine
  Engine.update(engine);
  background("yellow");  
  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  a7.display();
  polygon1.display();
  slingshot = new SlingShot(polygon1.body,{x:200, y:50});
  ground.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon1);
  }
}