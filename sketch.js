var hr;
var mn;
var sc;
var scAngle,mnAngle,hrAngle;
function setup() {
  createCanvas(800,400);
  
  
  
  
}

function draw() {
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  background(0);
  push();
  hrAngle = map(hr,0,12,0,360);
  stroke("skyblue");
  strokeWeight(8);
  translate(400,200);
  rotate(hrAngle);
  line(0,0,70,0);
  pop();
  push();
  mnAngle = map(mn,0,60,0,360);
  stroke("yellow");
  strokeWeight(6);
  translate(400,200);
  rotate(mnAngle);
  line(0,0,100,0);
  pop();
  push();
  scAngle = map(sc,0,60,0,360);
  stroke(255,0,0);
  strokeWeight(4);
  translate(400,200);
  rotate(scAngle);
  line(0,0,120,0);
  pop();
  drawSprites();
  textSize(20);
  text("View from here -->",10,200)
  //push();
  textSize(25);
  //rotate(90);
  fill("white");
 text("6",295,209);
 text("3",393,309);
 text("4",340,300);
 text("9",393,109);
 text("5",307,260);
 text("7",307,160);
 text("8",345,125);
 text("1",489,266);
 text("2",445,300);
 text("10",435,125);
 text("11",474,158);
  text("12",495,209);
  //pop();
  //drawing the arcs 
  strokeWeight(10); 
  noFill(); 
  //Seconds 
  stroke(255,0,0); 
  arc(400,200,300,300,0,scAngle); 
  //Minutes 
  stroke("yellow"); 
  arc(400,200,280,280,0,mnAngle); 
  //Hour 
  stroke("skyblue"); 
  arc(400,200,260,260,0,hrAngle);
}