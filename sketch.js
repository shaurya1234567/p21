var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadSound('music.mp3')
}


function setup(){
    canvas = createCanvas(900,600);

    block1 = createSprite(0,580,360,40);
    block1.shapeColor = "blue";

    block2 = createSprite(305,580,220,40);
    block2.shapeColor = "orange";

    block3 = createSprite(555,580,220,40);
    block3.shapeColor = "red";

    block4 = createSprite(805,580,220,40);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = 'cyan';
    ball.velocityX= 5;
ball.velocityY=5;
}

function draw() {
    background(rgb(169,169,169));
    text(mouseX+','+mouseY,30,45)
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX=0;
        ball.velocityY=0;
      music.stop();
      
      
      
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }
  
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }

    //write code to bounce off ball from the block4

    drawSprites();
}
