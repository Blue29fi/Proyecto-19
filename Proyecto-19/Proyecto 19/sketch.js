var jugador1, jugador1_Img;
var mountainf, fondomont_img;
var invisibleground;
var arbusto, arbustoImg;
var fer_running;
var monstruoJ, monstruoJ_Img;
var gameState = "play";

function preload(){
    fondomont_img = loadImage("mountain.jpg");
    jugador1_Img = loadImage("fer_running3.png");
    monstruoJ_Img = loadImage("monstruo.png");
    arbustoImg = loadImage("arbusto.png");
}

function setup() {
    createCanvas(1000,700);

    mountainf= createSprite(300,300);
    mountainf.addImage("montaña_fondo",fondomont_img);
    mountainf.velocityX = -1;

    monstruoJ =createSprite(100,505);
    monstruoJ.addImage("monstruoJ_Img",monstruoJ_Img);
    monstruoJ.scale=0.5;

    Fer = createSprite(300,505);
    Fer.addAnimation("jugador1_Img",fer_running);
    Fer.scale=0.3;

}

function draw() {
    background(0);
    if (gameState === "play") {
    
        if (mountainf.x < 50) {
         mountainf.x = width/2;
         }
        if(keyDown("space")) {
            Fer.velocityY=-5;
        }
        Fer.velocityY=Fer.velocityY+0.8;

        spawnArbusto();
        drawSprites();
    }

    if (gameState === "end") {
        stroke("red");
        fill("orange");
        textSize(32);
        text(" Game Over",230,250);
      }
}

function spawnArbusto() {
    //código para aparecer puertas en la torre
    if (frameCount % 240 === 0) {
      var arbusto= createSprite(200,-50);
      arbusto. addImage(arbustoImg);
  
      arbusto.x = Math.round(random(120,400));
      arbusto.velocityX= 1;

      fer_running.depth=arbusto.depth;
      fer_running.depth +=1;
  
      //asignar tiempo de vida a la variable
      arbusto.lifeTime=1000;
    }
}