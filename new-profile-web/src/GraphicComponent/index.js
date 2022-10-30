var canvas = document.querySelector("#canvas");

canvas.width = document.querySelector("body").innerWidth;
canvas.height = document.querySelector("body").innerHeight;

var ctx = canvas.getContext("2d");

window.addEventListener("resize", function (){ 

	
});
	ctx.beginPath();
	ctx.lineTo(0,0);
	ctx.moveTo(50,50);
	ctx.storkeStyle = "red";
	ctx.stroke();
// function animate(){
// 	requestAnimationFrame(animate);
// 	ctx.beginPath();
// 	ctx.lineTo(0,0);
// 	ctx.moveTo(50,50);
// 	ctx.storkeStyle = "red";
// 	ctx.stroke();
	
	
// }