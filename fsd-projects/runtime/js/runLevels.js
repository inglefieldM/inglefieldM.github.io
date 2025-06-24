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
    function createReward (x, y) {
    var reward = 
  game.createGameItem("reward", 30);
    var greenCircle = draw.circle(5, 
      "greenyellow");
    greenCircle.x = 0;
    greenCircle.y = 0;
    reward.velocityX = -1;
    reward.rotationalVelocity = 7;
    reward.addChild(greenCircle);
    reward.x = x
    reward.y = groundY - y;
    game.addGameItem(reward);
            reward.onPlayerCollision = function (){
              game.changeIntegrity(50);
              reward.fadeOut();
            }
            reward.onProjectileCollision = function (){
              reward.fadeOut();
            }
    }

    function createMarker (x, y) {
    var marker = 
  game.createGameItem("marker", 30);
    var blueSquare = draw.rect(40, 40, 
      "blue");
    blueSquare.x = -28;
    blueSquare.y = -28;
    marker.velocityX = -0.6;
    marker.rotationalVelocity = 7;
    marker.addChild(blueSquare);
    marker.x = x
    marker.y = groundY - y;
    game.addGameItem(marker);
            marker.onPlayerCollision = function (){
              startLevel();
            }
            marker.onProjectileCollision = function (){
              startLevel();
            }
          }
          createMarker(1200, 50)
              createReward(1100, 50);  
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
