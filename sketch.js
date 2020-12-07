const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var ball;
var sling;

function preload() {

}

function setup() {
  var canvas = createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(690,265,250,10);
  ball = new Ball(200,150,50);
  block1 = new Block(630,235,30,40);
  block2 = new Block(660,235,30,40);
  block3 = new Block(690,235,30,40);
  block4 = new Block(720,235,30,40);
  block5 = new Block(750,235,30,40);
  block6 = new Block(660,195,30,40);
  block7 = new Block(690,195,30,40);
  block8 = new Block(720,195,30,40);
  block9 = new Block(690,155,30,40);
  sling = new Slingshot(ball.body, {x: 200, y: 150});
}

function draw() {
  background("Gainsboro");
  Engine.update(engine);

  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode == 32) {
    sling.attach(ball.body);
  }
}