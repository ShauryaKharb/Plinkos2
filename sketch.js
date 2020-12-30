const  Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
const  Constraint = Matter.Constraint;
 
var particles =[];
var plinkos = [];
var divisions = [];
var hLine= [];
var plink;

var lSide,rSide;

var pole1,pole2,pole3;

var divisionHeight=300;
var score =0;


var PLAY = 1;
var END = 0;
var gameState=PLAY;
function setup() {
  createCanvas(800, 800);

  setFrameRate(180);

  engine = Engine.create();
  world = engine.world;
  ground = new GroundClass(width/2,height,width,20);
  rground = new GroundClass(width+10,height/2,20,height);
  lground = new GroundClass(-10,height/2,20,height);

  pole1 = new Striker(width/2,375,135,10);

  string1 = new Line(pole1.body,{x : width/2 , y : 375});

  pole2 = new Striker(width/2+200,375,65,10);

  string2 = new Line(pole2.body,{x : width/2+200 , y : 375});

  pole3 = new Striker(width/2-200,375,65,10);

  string3 = new Line(pole3.body,{x : width/2-200 , y : 375});

  plink = new Plinko(80,500);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

    //  for (var j = 50; j <=width-10; j=j+50) 
    // {
    
    //    plinkos.push(new Plinko(j,375));
    // }

    for (var D = 23; D <= width ; D+=80){
      hLine.push(new Divisions(D, 540, 35,10));
    }

    for (var D = 56 ; D <= width ; D+=80){
      hLine.push(new Divisions(D, 600, 35,10 ));
    }

    for (var D = 23; D <= width ; D+=80){
      hLine.push(new Divisions(D, 670, 35,10));
    }

    for (var D = 56; D <= width ; D+=80){
      hLine.push(new Divisions(D, 735, 35,10));
    }

    
}
 


function draw() {
  
  if(gameState===PLAY){
    Engine.update(engine);
   
  // background(random(0, 255), random(0, 255), random(0, 255));
  background(0);

  // fill(random(0, 255), random(0, 255), random(0, 255));
  fill("white");
  textSize(30);
  textFont("algerian")
  text("Score : "+score,20,40); 

  textSize(35);
  textFont("forte");
  text("0       1       2       2       5       5       2       2       1       0",30,500);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(keyCode===32 && frameCount%180===0){
     particles.push(new Particle( mouseX/*random(width/2-80, width/2+100)*/, 10,10));
     // score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
     particles[j].score();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   for (var D = 0; D < hLine.length; D++) {
     
    hLine[D].display();
  }

   ground.display();
   lground.display();
   rground.display();

   pole1.display();
   pole2.display();
   pole3.display();

   plink.display();

   Matter.Body.setAngularVelocity(pole1.body,-0.11);
   Matter.Body.setAngularVelocity(pole2.body,0.1);
   Matter.Body.setAngularVelocity(pole3.body,0.12);

   if(score>101){
     gameState=END;
   }
  }else if(gameState===END){
    fill ("yellow");
    textSize(70);
    stroke("red")
    strokeWeight(2);
    textFont("jokerman");
    text("😏 YOU WIN !",140,400);
    // fill("white");
    // noStroke();
    // textSize(30);
    // text("Press R to restart.",280,450);
  }
}