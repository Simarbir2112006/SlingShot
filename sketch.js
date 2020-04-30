const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base1,base2,base3,platform,ball,slingshot,t1,t2,t3,t4,t5,t6,t7,t8,t9;

function setup(){
    var canvas = createCanvas(1200,640);
    engine = Engine.create();
    world = engine.world;

    base1 = new Base(1000,500,200,20);
    base2 = new Base(1000,150,200,20);
    base3 = new Base(1000,325,200,20);
    platform = new Base(150,500,300,300);
    ball = new Ball(150,200);
    slingshot = new SlingShot(ball.body,{x:150,y:200});
    t1 = new Target (1000,450);
    t2 = new Target (1030,450);
    t3 = new Target (1060,450);
    t4 = new Target (970,450);
    t5 = new Target (940,450);
    t6 = new Target (1030,420);
    t7 = new Target (1000,420);
    t8 = new Target (970,420);
    t9 = new Target (1000,390);
    t10 = new Target (1000,310);
    t11= new Target (1030,310);
    t12= new Target (1060,310);
    t13= new Target (970,310);
    t14= new Target (940,310);
    t15= new Target (1030,290);
    t16= new Target (1000,290);
    t17= new Target (970,290);
    t18= new Target (1000,260);
    t19 = new Target (1000,120);
    t20= new Target (1030,120);
    t21= new Target (1060,120);
    t22= new Target (970,120);
    t23= new Target (940,120);
    t24= new Target (1030,90);
    t25= new Target (1000,90);
    t26= new Target (970,90);
    t27= new Target (1000,60);
}

function draw(){
  background("black");
  Engine.update(engine);

  base1.display();
  base2.display();
  base3.display();
  platform.display();
  ball.display();
  slingshot.display();
  t1.display();
  t2.display();
  t3.display();
  t4.display();
  t5.display();
  t6.display();
  t7.display();
  t8.display();
  t9.display();
  t10.display();
  t11.display();
  t12.display();
  t13.display();
  t14.display();
  t15.display();
  t16.display();
  t17.display();
  t18.display();
  t19.display();
  t20.display();
  t21.display();
  t22.display();
  t23.display();
  t24.display();
  t25.display();
  t26.display();
  t27.display();

   
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  slingshot.sling.bodyA=ball.body;
}

function mouseReleased(){
  slingshot.sling.bodyA=null;
}