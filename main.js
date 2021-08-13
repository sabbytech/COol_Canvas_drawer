my_canvas = document.getElementById("myCanvas");
ctx = my_canvas.getContext('2d');
pen_color = "blue";
pen_width = 3;
var mouseEvent = "empty";
var lastx, lasty;

my_canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUp";
}

my_canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseEvent = "mouseDown";
}

my_canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseLeave";
}

my_canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

    currentx= e.clientX - my_canvas.ofsetLeft;
    currenty=e.clientY - my_canvas.ofsetTop;

    if (mouseEvent = "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = pen_color;
    ctx.lineWidth = pen_width;
    ctx.moveTo(lastx, lasty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
    }
    lastx = currentx;
    lasty = currenty;
}