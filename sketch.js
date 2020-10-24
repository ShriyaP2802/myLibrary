var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  movingRect = createSprite(350,70,100,100);

  gameObject1 = createSprite(1000,400,60,70);
  gameObject2 = createSprite(200,400,80,50);
  gameObject3 = createSprite(1000,400,45,65);
  gameObject4 = createSprite(200,600,60,60);

  gameObject1.shapeColor = "yellow";
  gameObject2.shapeColor = "yellow";
  gameObject3.shapeColor = "yellow";
  gameObject4.shapeColor = "yellow";

  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(movingRect,gameObject2)) {
  gameObject2.shapeColor = "purple";
  movingRect.shapeColor = "purple";
} else {
  gameObject2.shapeColor = "yellow";
  movingRect.shapeColor = "blue";
}

  drawSprites();
}
