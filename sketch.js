var score=0;
var life = 3;
var gameState = "play";

var dessertGroup;
function preload()
{
  bg_img = loadImage('assets/kitchen.jpeg');
  cupcake_img = loadImage('assets/cupcake.png')
  cakepop_img = loadImage('assets/cake pop.png')
  cake_img = loadImage('assets/cake slice.png')
  maceron_img= loadImage('assets/maceron.png')

  food = loadImage('assets/melon.png');
  rabbit = loadImage('assets/Rabbit-01.png');;
  blink = loadAnimation("assets/blink_1.png","assets/blink_2.png","assets/blink_3.png");
  eat = loadAnimation("assets/eat_0.png" , "assets/eat_1.png","assets/eat_2.png","assets/eat_3.png","assets/eat_4.png");
  sad = loadAnimation("assets/sad_1.png","assets/sad_2.png","assets/sad_3.png");
  eating_sound = loadSound ("assets/eating_sound.mp3");
  cutting_sound = loadSound("assets/Cutting Through Foliage.mp3");
  rope_cut_sound = loadSound("assets/rope_cut.mp3")
  sound1 = loadSound("assets/sound1.mp3")
  bg_img2 = loadImage("assets/bg_plain.png");
  mutebutton = loadImage("assets/cut_button.png")
  cake_pop = loadImage("assets/cake_pop.png")
  cookie_img = loadImage("assets/cookiee.png")
 dog = loadAnimation("assets/dog_1.png","assets/dog_2.png");


  lucky_img = loadImage("assets/lucky_img.png")

  
}

function setup() {
  
  var isMObile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if(isMObile)
{
  canW = displayWidth;
  canH = displayHeight
}  
else{
  canW = windowWidth; 
    canH = windowHeight; 
}
createCanvas(windowWidth,windowHeight);
  frameRate(80);

  dessertGroup = new Group();

  lucky = createSprite(width/2,height-10)
  lucky.addAnimation('dog1',dog);
  lucky.scale =0.3;
  
  invisible_ground = createSprite(width/2,height-10,canW,20)
  invisible_ground.visible=false;
  
  lucky.collide(invisible_ground)
  
 

}



function draw() 
{
  background(51);
  image(bg_img,0,0  ,canW,canH);
  
  //if (gameState  == "play"){
  lucky.debug = true;
  lucky.setCollider("circle",45,0,150);

if(dessertGroup.collide(invisible_ground)){
  life = life - 1;
  dessertGroup.destroyEach();
//   if (life == 0){
//     gameState = "end"
    
//   }
 }

  
  

  drop();
console.log(dessertGroup.length)
    for (var i = 0; i < dessertGroup.length; i++) {
        if (dessertGroup.get(i).isTouching(lucky)) {
            dessertGroup.get(i).destroy();
            

            score =score+1;
          
            console.log("Scores : ",score)

        }
            
      }

      if (keyDown("LEFT")){
        lucky.x=lucky.x-5
      }

      if (keyDown("RIGHT")){
        lucky.x=lucky.x+5
      }

      
   // }

    // if(gameState == "end"){
    //   textSize(20)
    //   fill("black")
    //   text("Loser",width/2,400);
    //   dessertGroup.setVelocityEach(0,0);
    // }
    fill("black");
    textSize(20);
    text("Score: "+score,200,50);

    fill("black")
textSize(20);
  text("Life :"+life,200,100);
   
    drawSprites();

        }



function drop(){
  if (frameCount % 120 === 0) {
    desserts = createSprite(random(100, 1000), 0, 100, 100);
    desserts.velocityY = 6;
    var rand = Math.round(random(1,5));
    switch(rand){
        case 1: desserts.addImage("cake", cake_img);
        desserts.scale = 0.4;
        break;
        case 2: desserts.addImage("cakepop", cake_pop);
        desserts.scale = 0.3;
        break;
        case 3: desserts.addImage("cupcake", cupcake_img);
        desserts.scale = 0.2;
        break;
        case 4: desserts.addImage("maceron", maceron_img);
        desserts.scale = 0.3;
        break;
        case 5: desserts.addImage("cookie", cookie_img);
        desserts.scale = 0.4;
        break;
        default:
          break;
    }
    dessertGroup.add(desserts);
}
}

