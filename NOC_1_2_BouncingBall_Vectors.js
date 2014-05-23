// put code in an overall function
window.onload = function () {
    var canvas = document.getElementById('myCanvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        x = 10,
        y = 10,    
        location = vector.create(10, 10),
        velocity = vector.create(2.5, 5);
    
            
    //console.log(velocity.getX());
    //console.log(velocity.getY());
    //console.log(velocity.getAngle());
    //console.log(velocity.getLength());

    setInterval(draw, 10);

    function draw() {
        // redraw background every frame
        context.clearRect(0, 0, width, height);
        
        // add current speed to the location
        location.addTo(velocity);
        console.log(location.getX());

        
        // draw a circle at the location
        context.beginPath();
        context.fillStyle = "#000ff";
        context.arc(location.getX(), location.getY(), 20, 0, Math.PI * 2, true);
        context.fill();
        
        if (location.getX() > width || location.getX() < 0) {
            console.log("I'm true");
            velocity._x *= -1;
        }
        if (location.getY() > height || location.getY() < 0) {
            velocity._y *= -1;
        }

    }

};