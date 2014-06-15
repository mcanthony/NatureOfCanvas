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
        this.x = width / 2;
        this.y = height / 2;

        Walker.prototype.display = function () {
            ctx.rect(this.x, this.y, 1, 1);
            ctx.stroke();
            ctx.fill();
        }

        Walker.prototype.walk = function () {
            var choice = Math.random();


            // improved movement
            var stepx = Math.random(); // value 0-1
            var stepy = Math.random();

            if (stepx >= 0 && stepx < 0.33) {
                stepx = -1;
            } else if (stepx >= 0.33 && stepx < 0.66) {
                stepx = 0;
            } else {
                stepx = 1;
            }

            if (stepy >= 0 && stepy < 0.33) {
                stepy = -1;
            } else if (stepy >= 0.33 && stepy < 0.66) {
                stepy = 0;
            } else {
                stepy = 1;
            }

            this.x += stepx;
            this.y += stepy;

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