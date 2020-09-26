var engine, world, ground, ball, groundOption;

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  groundOption = {isStatic: true}
  ground = Bodies.rectangle(400,395,800,10,groundOption);
  World.add(world,ground);
  ballOption = {restitution: 1}
  ball = Bodies.circle(200,10,10,ballOption);
  console.log(ball);
  World.add(world,ball);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);
}