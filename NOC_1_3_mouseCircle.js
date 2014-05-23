var ctx;
var circleX = 0;
// var direction = 1; //Not used anymore
var mouseX = mouseY = 0;
window.onload = start_animation; 
 
function start_animation()
{
    var element = document.getElementById("myCanvas");
    element.addEventListener('mousemove', handle_mouse); // element is already selected, add handler
    ctx = element.getContext("2d");
    var interval = setInterval(animate,1000/60);
}
function animate()
{
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect (0, 0,  400, 400);
    draw_circle(mouseX, mouseY);
}
 
function draw_circle(x,y)
{
    ctx.fillStyle= "rgb(0,0,100);"
    ctx.beginPath();
    ctx.arc(x,y,40,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}
 
function handle_mouse(event)
{
    mouseX = event.layerX;
    mouseY = event.layerY;
}