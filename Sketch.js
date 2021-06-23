var prince,princess
var joker,dragon
var cage, dragonfire
var gamestate = play 

 function preload(){
   
     prince =loadImage("images/Prince.png") 
     princess = loadImage("images/Princess.png")
     joker = loadImage("images/JokerVillain.jpg")
     dragon = loadImage("images/DragonImage.png")
     cage  = loadImage("images/Cageimage.png")
     dragonfire = loadImage("images/dgfireimage.jpg")
    

    
 }

 function setup() {

   createCanvas(1000,800)


    cage1 = createSprite(700,500,50,50);
    cage1.addImage("cage",cage);
    cage1.scale = 0.5;
    
    princess1 = createSprite(700,500,50,50);
    princess1.addImage("princess",princess)
    princess1.scale = 0.1;

    cage.depth = princess.depth;
    cage.depth = princess.depth + 1 
  



    dragon1 = createSprite(200,250,50,50);
    dragon1.addImage("dragon",dragon);
    dragon1.scale = 0.1

    dragonfire1 = createSprite(100,110,20,20);
    dragonfire1.addImage("dragonfire",dragonfire);

    

    joker1 = createSprite(500,500,20,20)
     joker.scale = 0.2 

     if(gamestate===serve){
       dgfireimage.velocityX = 1
     } 
     
      
     
          


     


  



    
 

 }


 function draw() {
   background("BLACK");
   drawSprites();

 }


    
 