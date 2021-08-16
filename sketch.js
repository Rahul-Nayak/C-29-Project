const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base,left_edge,right_edge,top_edge;
var bridge,jointLink,jointLink;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);


base = new Base(600,650,1500,10);
left_edge = new Base(5,300,10,1500);
top_edge = new Base(600,5,1500,10);
right_edge = new Base(1345,300,10,1500);
bridge = new Bridge(30,{x:30,y:300});
jointPoint = new Base (1000,500,500,30);


Matter.Composite.add(bridge.body,jointPoint);
jointLink = new Link(bridge,jointPoint);
rectMode(CENTER);
}

function draw() {
  background(51);
  text(mouseX+','+mouseY,mouseX,mouseY);
base.show();
left_edge.show();
right_edge.show();
top_edge.show();
bridge.show();
jointPoint.show();
Engine.update(engine);

 

  for(var i = 0; i<=8; i++){
   
    var x = random(width / 2 - 200, width / 2 + 300);
   var  y = random(10,140);
   var stone = new Stone(x,y,80,80);
    stones.push(stone);
    stone.show();
  }
  
}