const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 590);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(750,height,1500,20);
	tree = new Tree(1050, 580)
	mango1 = new Mango(920,195,60)
	mango2 = new Mango(990,230,80)
	mango3 = new Mango(1020,100,70)
	mango4 = new Mango(1070,180,60)
	mango5 = new Mango(1240,215,80)
	mango6 = new Mango(1150,215,80)
	mango7 = new Mango(1130,120,75)
	mango8 = new Mango(1100,60,50)
	stone = new Stone(100,450,60)
	//boy = new Boy(60,360,210,300)
	launcherObj = new Launcher(stone.body, {x:102, y:445});
}


function draw() {
  rectMode(CENTER);  
  Engine.update(engine)

  background(210);

  textSize(25)
  text("Press space to get a second chance!", 15, 40)

  image(boyImage,70,360,200,300);
  drawSprites();
  ground.display()
  tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  stone.display()
  //boy.display()
  launcherObj.display()
  detectCollision(stone, mango1)
  detectCollision(stone, mango2)
  detectCollision(stone, mango3)
  detectCollision(stone, mango4)
  detectCollision(stone, mango5)
  detectCollision(stone, mango6)
  detectCollision(stone, mango7)
  detectCollision(stone, mango8)
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcherObj.fly();
}

function detectCollision(lstone, lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(mangoBodyPosition.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y)
  if (distance<=lmango.r + lstone.r) {
    Body.setStatic(lmango.body,false)
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x : 102, y : 445})
    launcherObj.attach(stone.body)
  }
}