const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computerPlayer, computerBase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base, Player, Computer Base, and Computer Player Object
   playerBase = new Playerbase(150,430,250,250);
   player = new Player(150,250,100,200);
   computerPlayer = new ComputerPlayer(1050,250,100,200);
   computerBase = new ComputerBase(1050,430,250,250);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width/2, 100);

  playerBase.display();
  player.display();
  computerBase.display();
  computerPlayer.display();
}
