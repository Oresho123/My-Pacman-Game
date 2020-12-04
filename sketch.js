
var score=0;
    var  gameState="play";

var pacmanimage, ghost1img,ghost2img,ghost3img,ghost4img

    var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard22,food1group ,food2group ,food3group ,food4group ,food5group , food6group ,food7group ,food8group ,food9group ,foodgroup10,foodgroup11,foodgroup12, foodgroup13 ,foodgroup14,foodgroup15,foodgroup16,foodgroup17,foodgroup18,foodgroup19,foodgroup20,foodgroup21,foodgroup22,Sofia,ghost1,ghost2,ghost3,ghost4;

var edges;

function preload()
{
  pacmanimage=loadImage("pacman.png");
  ghost1img=loadImage("pacman2.PNG")
  ghost2img=loadImage("pacman3.png")
  ghost3img=loadImage("pacman4.png")
  ghost4img=loadImage("pacman5.png")
  
}
//creating the maze
function setup()
{
  createCanvas(400,400);
  edges=createEdgeSprites();
  //creating the game object
      Sofia = createSprite(20,35,18,18);
  //Sofia.debug=true;
//Sofia.setAnimation("pacman-removebg-preview__1_-removebg-preview.png_1");
  Sofia.addImage("pacmanimage",pacmanimage);
Sofia.scale=0.11;
      cardboard1 = createSprite(10,70,100,20);
   cardboard1.shapeColor = "brown";
      cardboard2 = createSprite(100,40,20,90);
  cardboard2.shapeColor = "brown";
      cardboard3 = createSprite(80,130,100,20);
  cardboard3.shapeColor = "brown";
      cardboard4 = createSprite(50,250,20,100);
  cardboard4.shapeColor = "brown";
      cardboard5 = createSprite(130,210,100,20);
   cardboard5.shapeColor = "brown";
      cardboard6 = createSprite(10,250,100,20);
   cardboard6.shapeColor = "brown";
      cardboard7 = createSprite(160,120,20,100);
   cardboard7.shapeColor = "brown";
      cardboard8 = createSprite(150,20,100,20);
   cardboard8.shapeColor = "brown";
      cardboard9 = createSprite(250,70,20,100);
   cardboard9.shapeColor = "brown";
      cardboard10 = createSprite(270,150,100,20);
   cardboard10.shapeColor = "brown";
      cardboard11 = createSprite(330,50,100,20);
   cardboard11.shapeColor = "brown";
      cardboard12 = createSprite(340,125,20,100);
   cardboard12.shapeColor = "brown";
      cardboard13 = createSprite(220,250,20,100);
   cardboard13.shapeColor = "brown";
      cardboard14 = createSprite(330,210,150,20);
   cardboard14.shapeColor = "brown";
      cardboard15 = createSprite(100,300,20,100);
   cardboard15.shapeColor = "brown";
      cardboard16 = createSprite(180,310,100,20);
   cardboard16.shapeColor = "brown";
      cardboard17 = createSprite(30,352,20,100);
   cardboard17.shapeColor = "brown";
      cardboard18 = createSprite(175,352,20,100);
   cardboard18.shapeColor = "brown";
      cardboard19 = createSprite(280,290,20,100);
   cardboard19.shapeColor = "brown";
      cardboard20 = createSprite(350,270,120,20);
   cardboard20.shapeColor = "brown";
      cardboard21 = createSprite(250,390,100,20);
   cardboard21.shapeColor = "brown";
      cardboard22 = createSprite(330,370,20,100);
   cardboard22.shapeColor = "brown";
      target = createSprite(395,375,10,50);
  target.shapeColor = "orange";
   ghost1=createSprite(15,210,20,20);
  //ghost1.setAnimation("pacman2.PNG_2");
ghost1.addImage(ghost1img);
  ghost1.scale=0.5;
  ghost1.velocityY=-3;
  ghost2=createSprite(132,46,20,20);
 // ghost2.setAnimation("pacman3.png_1");
  ghost2.addImage(ghost2img);
  ghost2.scale=0.13;
  ghost2.velocityY=+3;
  ghost3=createSprite(275,78,20,20);
 // ghost3.setAnimation("pacman4.png_1");
 ghost3.addImage(ghost3img);
  ghost3.scale=0.13;
  ghost3.velocityY=+3;
  ghost4=createSprite(240,360,20,20);
 // ghost4.setAnimation("pacman5.png_1");
  ghost4.addImage(ghost4img);
  ghost4.scale=0.13;
  ghost4.velocityY=-3;
      food1group = new Group();
      food2group = new Group();
      food3group = new Group();
      food4group = new Group();
      food5group = new Group();
      food6group = new Group();
      food7group = new Group();
      food8group = new Group();
      food9group = new Group();
      foodgroup10=new Group();
      foodgroup11=new Group();
      foodgroup12=new Group();
      foodgroup13 = new Group();
      foodgroup14=new Group();
      foodgroup15=new Group();
      foodgroup16=new Group();
      foodgroup17=new Group();
      foodgroup18=new Group();
      foodgroup19=new Group();
      foodgroup20=new Group();
      foodgroup21=new Group();
      foodgroup22=new Group();

  for (    i = 10; i < 150; i=i+20) {
        food1=createSprite(i,110,5,5); 
         food2=createSprite(i,180,5,5);
         food3=createSprite(i+160 ,180,5,5);
         food4=createSprite(i+320,180,5,5);
         food5=createSprite(i+240,230,5,5);
         food6=createSprite(i+190,360,5,5);
         food7=createSprite(i+300,300,5,5);
         food8=createSprite(i+65,230,5,5);
         food9=createSprite(i+95,50,5,5);
         food10=createSprite(i+270,70,5,5);
         food11=createSprite(i+50,284,5,5);
         food12=createSprite(i+40,390,5,5);
         food13=createSprite(190,i+40,5,5);
         food14=createSprite(70,i+300,5,5);
         food15=createSprite(270,i+6,5,5);
         food16=createSprite(250,i+235,5,5);
         food17=createSprite(10,i+80,5,5);
         food18=createSprite(380,i+50,5,5);
         food19=createSprite(380,i+300,5,5);
         food20=createSprite(i+255,20,5,5);
         food21=createSprite(198,i+160,5,5);
         food22=createSprite(121,i+245,5,5);
  food2.shapeColor="red";
  food1.shapeColor="red";
  food3.shapeColor="red";
  food4.shapeColor="red";
  food5.shapeColor="red";
  food6.shapeColor="red";
  food7.shapeColor="red";
  food8.shapeColor="red";
  food9.shapeColor="red";
  food10.shapeColor="red";
  food11.shapeColor="red";
  food12.shapeColor="red";
  food13.shapeColor="red";
  food14.shapeColor="red";
  food15.shapeColor="red";
  food16.shapeColor="red";
  food17.shapeColor="red";
  food18.shapeColor="red";
  food19.shapeColor="red";
  food20.shapeColor="red";
  food21.shapeColor="red";
  food22.shapeColor="red";
food1group.add(food1);
food2group.add(food2);
food3group.add(food3);
food4group.add(food4);
food5group.add(food5);
food6group.add(food6);
food7group.add(food7);
food8group.add(food8);
food9group.add(food9);
foodgroup10.add(food10);
foodgroup11.add(food11);
foodgroup12.add(food12);
foodgroup13.add(food13);
foodgroup14.add(food14);
foodgroup15.add(food15);
foodgroup16.add(food16);
foodgroup17.add(food17);
foodgroup18.add(food18);
foodgroup19.add(food19);
foodgroup20.add(food20);
foodgroup21.add(food21);
foodgroup22.add(food22);
  }
}
function draw() {
  background("pink");
  textSize(20);
  text(score,6,15);
  if(Sofia.isTouching(ghost1)||Sofia.isTouching(ghost2)||Sofia.isTouching(ghost3)||Sofia.isTouching(ghost4)){
 gameState="end";
  }
  if(gameState==="end"){
    Sofia.visible=false;
    ghost1.visible=false;
    ghost2.visible=false;
    ghost3.visible=false;
    ghost4.visible=false;
    cardboard1.visible=false;
    cardboard2.visible=false;
    cardboard3.visible=false;
    cardboard4.visible=false;
    cardboard5.visible=false;
    cardboard6.visible=false;
    cardboard7.visible=false;
    cardboard8.visible=false;
    cardboard9.visible=false;
    cardboard10.visible=false;
    cardboard11.visible=false;
    cardboard12.visible=false;
    cardboard13.visible=false;
    cardboard14.visible=false;
    cardboard15.visible=false;
    cardboard16.visible=false;
    cardboard17.visible=false;
    cardboard18.visible=false;
    cardboard19.visible=false;
    cardboard20.visible=false;
    cardboard21.visible=false;
    cardboard22.visible=false;
    food1group.destroyEach();
    food2group.destroyEach();
    food3group.destroyEach();
    food4group.destroyEach();
    food5group.destroyEach();
    food6group.destroyEach();
    food7group.destroyEach();
    food8group.destroyEach();
    food9group.destroyEach();
    foodgroup10.destroyEach();
    foodgroup11.destroyEach();
    foodgroup12.destroyEach();
    foodgroup13.destroyEach();
    foodgroup14.destroyEach();
    foodgroup15.destroyEach();
    foodgroup16.destroyEach();
    foodgroup17.destroyEach();
    foodgroup18.destroyEach();
    foodgroup19.destroyEach();
    foodgroup20.destroyEach();
    foodgroup21.destroyEach();
    foodgroup22.destroyEach();
    target.visible=false;
    text("GAME OVER",150,200);
    text("Score : "+score,170,180);
      textSize(20);
        text("Thank you for playing my Pacman Game ^^ .",10,120);
        text("Hope you enjoyed it!",20,150);
      fill("pink");
  text(score,6,15);
  }
  if(Sofia.isTouching(food1group)){
    food1group.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
  if(Sofia.isTouching(food2group)){
    food2group.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
  if(Sofia.isTouching(food3group)){
    food3group.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
  if(Sofia.isTouching(food4group)){
    food4group.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
  if(Sofia.isTouching(food5group)){
    food5group.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
  if(Sofia.isTouching(food6group)){
    food6group.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
  if(Sofia.isTouching(food7group)){
    food7group.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
  if(Sofia.isTouching(food8group)){
    food8group.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
  if(Sofia.isTouching(food9group)){
    food9group.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
   if(Sofia.isTouching(foodgroup10)){
    foodgroup10.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
     if(Sofia.isTouching(foodgroup11)){
    foodgroup11.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
     if(Sofia.isTouching(foodgroup12)){
    foodgroup12.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
      if(Sofia.isTouching(foodgroup13)){
    foodgroup13.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
      if(Sofia.isTouching(foodgroup14)){
    foodgroup14.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
      if(Sofia.isTouching(foodgroup15)){
    foodgroup15.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
      if(Sofia.isTouching(foodgroup16)){
    foodgroup16.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
      if(Sofia.isTouching(foodgroup17)){
    foodgroup17.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
        if(Sofia.isTouching(foodgroup18)){
    foodgroup18.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
        if(Sofia.isTouching(foodgroup19)){
    foodgroup19.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
        if(Sofia.isTouching(foodgroup20)){
    foodgroup20.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
        if(Sofia.isTouching(foodgroup21)){
    foodgroup21.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
        if(Sofia.isTouching(foodgroup22)){
    foodgroup22.destroyEach();
    score=score+1;
    Sofia.y=Sofia.y+10;
  }
if(keyDown(UP_ARROW)){
  Sofia.y=Sofia.y-5;
}
if(keyDown(DOWN_ARROW)){
  Sofia.y=Sofia.y+5;
}
if(keyDown(LEFT_ARROW)){
  Sofia.x=Sofia.x-5;
}
if(keyDown(RIGHT_ARROW)){
  Sofia.x=Sofia.x+5;
}

ghost1.bounceOff(cardboard1);
ghost1.bounceOff(cardboard6);
ghost2.bounceOff(cardboard3);
ghost2.bounceOff(cardboard8);
ghost3.bounceOff(cardboard10);
ghost3.bounceOff(cardboard11);
ghost4.bounceOff(cardboard10);
ghost4.bounceOff(cardboard21);
Sofia.collide(cardboard1);
Sofia.collide(cardboard2);
Sofia.collide(cardboard3);
Sofia.collide(cardboard4);
Sofia.collide(cardboard5);
Sofia.collide(cardboard6);
Sofia.collide(cardboard7);
Sofia.collide(cardboard8);
Sofia.collide(cardboard9);
Sofia.collide(cardboard10);
Sofia.collide(cardboard11);
Sofia.collide(cardboard12);
Sofia.collide(cardboard13);
Sofia.collide(cardboard14);
Sofia.collide(cardboard15);
Sofia.collide(cardboard16);
Sofia.collide(cardboard17);
Sofia.collide(cardboard18);
Sofia.collide(cardboard19);
Sofia.collide(cardboard20);
Sofia.collide(cardboard21);
Sofia.collide(cardboard22);
Sofia.collide(target);
  Sofia.bounceOff(edges);
drawSprites();



}
