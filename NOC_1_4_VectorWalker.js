// launch javascript when html is launched
window.onload = function () {
    "use strict";
    // initialise canvas
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var step = 1;
    
    // walker object
    var Walker = function () {
        // create an initial position
        this.location = vector.create(width/2, height/2);
        console.log(this.location.getX())
        this.x = width / 2;
        this.y = height / 2;
        //console.log("I'm in 2");

        Walker.prototype.display = function () {
            //console.log("I'm in now");
            ctx.fillStyle = "#F00";
            ctx.fillRect(this.location.getX(), this.location.getY(), 100, 100);
        }

        Walker.prototype.walk = function () {
            //console.log("I'm in again");
            // to walk it must update its location with a random vector
            var velocity = vector.create(Math.random(), Math.random());
            console.log(velocity.getX());


            // add current speed to the location
            this.location.addTo(velocity);
            //console.log(location.getX());
            
            
            // only getting positive vecors, need to get it to have 360 movement.

        }
    }

    // initialise a walker object
  var w = new Walker();

   // run draw function
  setInterval(draw, 10);

  function draw() {
      w.walk();
      w.display();
  }
}