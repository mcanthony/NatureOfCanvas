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
    var Walker = function() {
        this.x = width / 2;
        this.y = height / 2;

        Walker.prototype.display = function() {
            ctx.rect(this.x,this.y,1,1);
            ctx.stroke();
            ctx.fill();
        }
        
        Walker.prototype.walk = function () {
            var choice = Math.random();
            
            if (choice >= 0 && choice < 0.25) {
                this.x = this.x + step;
            } else if (choice >= 0.25 && choice < 0.5) {
                this.x = this.x - step;
            } else if (choice >= 0.5 && choice < 0.75) {
                this.y += step;
            } else {
                this.y -= step;
            } 
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

    
};