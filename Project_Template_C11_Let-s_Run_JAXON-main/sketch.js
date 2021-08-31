
function preload(){
  //pre-load images
  jake_running = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.PNG","Jake5.png")
  path_image = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  jake = createSprite(200,200,50,50)
  jake.addAnimation("running",jake_running)
  //moving background
  path = createSprite(200,200)
  path.addImage(path_image)
  path.velocityY = 4
  path.scale=1.2
  //invisble walls 
  invisble_wall = createSprite(30,200,10,400)
  invisble_wall.visible = false
  invisble_wall2 = createSprite(370,200,10,400)
  jake.collide(invisible_wall)
  jake.collide(invisible_wall2)
}

function draw() {
  background(0);
//reseting the background
if(path.y>400){
  path.y = height/2
}
}
