// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as const Engine = Matter.Engine

*/

var ball2,cannonball,ground,shootball,tanker,tanker2,tanker3;
function setup() {
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(1200,400);
    ground = new Ground(600,height,1200,20);
    cannonball = new CanonBall(200,200);
    tanker = new Tanker (200,305,90,10);
    tanker2 = new Tanker(200,350,90,80);
    tanker3 = new Tanker (260,320,30,10);
    ball2 = new Bob(1000,100,50);
   
        // setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {
    background("black");
    Engine.update(engine);
    ground.display();
    cannonball.display();
    tanker.display();
    tanker2.display();
    tanker3.display();
    ball2.display();
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {

}