console.log("test..");
var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
console.log(ctx)
var img = new Image();

img.src = "test.png";
img.onload = function(){
	ctx.drawImage(img, 300, 200, 100, 200); 
};
//.onload = 
console.log(img);

// ctx.font = "60px Trebuchet MS";
// ctx.fillstyle = "royalblue";
// ctx.fillText("Canvas, 40, 125");
// ctx.strokeStyle = "seagreen";
// ctx.strokeText("Text, 140, 205");