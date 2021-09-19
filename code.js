var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----



//creating the player Sofia
var Sofia = createSprite(20,20,20,20)


//creating the maze walls (wall1 - wall2)
  var wall1 = createSprite(10,70,100,20)
var wall2 = createSprite(120,10,20,100)
var wall3 = createSprite(100,100,50,20)
var wall4 = createSprite(130,210,20,100)
var wall5 = createSprite(270,150,100,20)
var wall6 = createSprite(200,75,50,20)
var wall7 = createSprite(215,220,20,20)
var wall8 = createSprite(250,70,20,100)
var wall9 = createSprite(330,50,100,20)
var wall10 = createSprite(30,352,100,20)
var wall11 = createSprite(295,305,100,20)
var wall12 = createSprite(250,390,20,100)
var wall13 = createSprite(100,300,50,20)
var wall14 = createSprite(50,200,100,20)
var wall15 = createSprite(320,380,100,20)
var wall16 = createSprite(250,390,20,100)
var wall17 = createSprite(220,250,100,20)
var wall18 = createSprite(360,135,10,100)
var wall19 = createSprite(350,235,75,20)
var wall20 = createSprite(170,350,20,100)
var wall21 = createSprite(45,265,20,100)
var wall22 = createSprite(20,150,100,20)






//create cup
var cup = createSprite(390,390,20,50)

  
function draw() {
  //setting the background color to pink
  background("pink");
  

if (keyDown("up")){
  Sofia.y=Sofia.y-10;
}

if (keyDown("down")){
  Sofia.y=Sofia.y+10;
}
  
if (keyDown("left")){
  Sofia.x=Sofia.x-10;
}

if (keyDown("right")){
  Sofia.x=Sofia.x+10;
}

Sofia.shapeColor=("yellow");
cup.shapeColor=("orange");

if (Sofia.isTouching(wall1)){
  Sofia.x=20;
  Sofia.y=20;
}

if (Sofia.isTouching(wall2)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall3)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall4)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall5)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall6)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall7)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall8)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall9)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall10)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall11)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall12)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall13)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall14)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall15)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall16)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall17)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall18)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall19)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall20)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall21)){
  Sofia.x=20;
  Sofia.y=20;
}


if (Sofia.isTouching(wall22)){
  Sofia.x=20;
  Sofia.y=20;
}


if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("purple");
  text("You Win", 200,200);
  }


drawSprites();

}






































function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(Wall22);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
}























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
