var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade (x, y) {
    var hitZoneSize = 25;
    var damageFromObstacle = 30;
    var sawBladeHitZone = 
    game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    sawBladeHitZone.rotationalVelocity = 40;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    }
    function createEnemy (x, y) {
    var enemy = 
  game.createGameItem("enemy", 30);
    var redSquare = draw.rect(56, 56, 
      "red");
    redSquare.x = -28;
    redSquare.y = -28;
    enemy.velocityX = -0.6;
    enemy.rotationalVelocity = 7;
    enemy.addChild(redSquare);
    enemy.x = x
    enemy.y = groundY - y;
    game.addGameItem(enemy);
            enemy.onPlayerCollision = function (){
              game.changeIntegrity(-50)
            }
            enemy.onProjectileCollision = function (){
              game.increaseScore(100);
              enemy.fadeOut();
            }
          }
                 function createReward (){
                  
                 }
    createEnemy(400, 50);
    createEnemy(700, 50);
    createEnemy(900, 50);
    createSawBlade(400, 300);
    createSawBlade(800, 300);
    createSawBlade(600, 200);
    
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
