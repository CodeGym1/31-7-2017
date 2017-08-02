/**
 * Created by Vhaukoi on 7/31/2017.
 */

    var c=document.getElementById("line");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200,100);
    ctx.stroke();

    // vẽ 1 đường tròn
    var b=document.getElementById("circle");
    var ctx=b.getContext("2d");
    ctx.beginPath();
    ctx.arc(90,50,40,0,2*   Math.PI);
    ctx.stroke();



    // vẽ 1 text
    var a=document.getElementById("text");
    var ctx =a.getContext("2d");
    ctx.font="30px Arial ";
    ctx.fillText("Hello World",10,50);


    //Draw Linear Gradient
    var d=document.getElementById("Linear");
    var ctx=d.getContext("2d");
    var grd=ctx.createLinearGradient(0,0,200,0)
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");
    ctx.fillStyle =grd;
    ctx.fillRect(10,10,150,80);

    //Draw Circular Gradient
var e = document.getElementById("cir");
var ctx = e.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

function vehinh() {
    var h = document.getElementById("hinhs");
    var ctx = h.getContext("2d");
    var img = document.getElementById("hinhbd");
    ctx. drawImage(img,10,10);
}