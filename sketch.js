//variáveis necessárias
var mario, marioImgD , marioImgE;
var clound , cloundImg
var ground,groundImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;
var MariojumpD , MariojumpE
var Princesa
var jumpSong , dieSong , bk_Song
var InvisibleGround;




//carregamento de Animações e images
function preload() {
    marioImgD = loadAnimation("./assets/mario1.png","./assets/mario2.png","/assets/mario3.png","/assets/mario4.png");
    marioImgE = loadAnimation("./assets/mario1E.png","./assets/mario2E.png","/assets/mario3E.png","/assets/mario4E.png");
    MariojumpE = loadImage ("./assets/MarioPulandoE.png");
    MariojumpD = loadImage ("./assets/MarioPulandoD.png"); 
    jumpSong = loadsound ("jump.mp3");
    dieSong = loadsound ("die.mp3");
    bk_Song  = loadsound ("background.mp3")
    //cloundImage = loadImage ("Nuvens.png")
    //nuvens2 = loadImage ("Nuvens2.jpg")
    //Princesa = loadImage   ("./assets/Pricess.png");
}
  
    function setup() {
    //canvas
    createCanvas(windowWidth, windowHeight);

    //sprite do mário
    mario = createSprite(50, height -92, 20, 50);
    mario.addAnimation("mario1D",marioImgD);
    mario.addAnimation("mario1E",marioImgE);

    //sprite das nuvens
    //clound = createSprite ('./assets/Nuvens.png')
    //clound.addImage ("clound",cloundImg)

    //Sprite do chão
    ground = createSprite (width/2 ,height - 10,width,20)
    ground.shapeColor = "limegreen"

   //descer
   InvisibleGround = createSprite(width / 2, height - 10, width, 10);
   InvisibleGround.visible = false;

   //musiquinhas não funciona ):

   //bk_Song.play();
   //bk_song.setVolume(0.5);


}

function draw() {
    //cor de fundo
    background("lightblue");
    fill ("gold");
    stroke (5)
    textSize(24)
    text ("Score: "+score, width-145,50);
    if (gameState === PLAY) {
        ground.velocityX = -7;
    
        score = score + Math.round(getFrameRate() / 60);
    
        if (ground.x < 2) {
          ground.x = ground.width / 2;
        }
    
        //if do pulo
        //verificar se teclou ou apertou espaço
        if (touches.length > 0 || keyDown("space")) {
          if (mario.y >= height - 40) {
            mario.velocityY = -10;
            jumpSong.play();
            touches = [];
          }
        }
    
        mario.velocityY = mario.velocityY + 0.5;
    
        //criarNuvem();
        

        //criarobstaculos();
    
        /*if (obstaculoG.isTouching(trex)) {
          gameState = END;
          dieSound.play();
        }*/
        //mario colidindo com o chão invisível

         mario.collide(InvisibleGround);

      }
    

    //desenhando sprites
    drawSprites();
}