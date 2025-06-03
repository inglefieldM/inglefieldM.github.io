$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform (100,400,200,400, "hotpink");
    createPlatform (0,0,300,200, "hotpink");
    createPlatform (0,500,300,400, "hotpink");
    createPlatform (300,700,1100,50);
    createPlatform (400,200,900,10);
    createPlatform (300,500,300,10);
    createPlatform (600,620,100,80);
    createPlatform (910,500,580,200);
    createPlatform (1300,300,100,10);
    createPlatform (1200,380,100,10);
    createPlatform (990,320,100,10);

   // TODO 3 - Create Collectables
    createCollectable("database",400,600,0.4,1);
    createCollectable("database",320,100,0,0);
    createCollectable("database",1020,220,0.4,1);

    
    // TODO 4 - Create Cannons
    createCannon("left", 600,1100);
    createCannon("right", 400,1300);
    createCannon("top", 400,1100);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
