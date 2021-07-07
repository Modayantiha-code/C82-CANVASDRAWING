canvas=document.getElementById("mycanvas1");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var lastxposition, lastyposition;
var color="purple";
var thickness=5;
canvas.addEventListener("mousedown",mousedownF);
function mousedownF(e)
{
mouseevent="mousedown"
}
canvas.addEventListener("mouseup",mouseupF);
function mouseupF(e)
{
mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",mouseleaveF);
function mouseleaveF(e)
{
mouseevent="mouseleave"
}
canvas.addEventListener("mousemove",mousemoveF);
function mousemoveF(e)
{
var currentxposition=e.clientX-canvas.offsetLeft;
var currentyposition=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown")
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=thickness;
console.log("Last x position="+lastxposition+"Last y position="+lastyposition);
ctx.moveTo(lastxposition,lastyposition);
console.log("Current x position="+currentxposition+"Current y position="+currentyposition);
ctx.lineTo(currentxposition,currentyposition);
ctx.stroke();
}
lastxposition=currentxposition;
lastyposition=currentyposition;
}