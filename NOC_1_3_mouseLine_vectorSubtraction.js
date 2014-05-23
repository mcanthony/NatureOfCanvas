// global variables
var context;
var canvas;
var mouseX = mouseY = 0;
window.onload = start_animation; 
//var width = canvas.width = window.innerWidth;
//var height = canvas.height = window.innerHeight;
//var centre = vector.create(width / 2, height / 2);


// animation function
function start_animation()
{
    canvas = document.getElementById("myCanvas");
    canvas.addEventListener('mousemove', handle_mouse, false);
    // makes canvas ther size of the browser window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log("I'm being called!!");
    context = canvas.getContext("2d");
    var interval = setInterval(animate,1000/60);
}

// animate function
function animate(){
    // redraw background every frame
    //context.fillStyle = "rgb(255,255,255)";
    //context.fillRect (0, 0,  canvas.width, canvas.height);
    // redraw background every frame
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw_line(mouseX, mouseY);
}

// draw_line function
function draw_line(x,y){
    console.log("I'm animating");
    context.beginPath();
    context.moveTo(canvas.width/2, canvas.height/2);
    context.lineTo(x, y);
    context.stroke();
}


// function to handle the mouse
function handle_mouse(){
    console.log("I'm also being called!!");
    mouseX = event.layerX;
    mouseY = event.layerY;
}
    
//console.log(mouseX);
