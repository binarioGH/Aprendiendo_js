function draw(color, x1, y1, x2, y2){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(x1, x2);
	lienzo.lineTo(y1, y2);
	lienzo.stroke();
	lienzo.closePath();
}

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var count = 0;
var xf = 10;
var yi = 0;

while(count < 30){
	draw("red", 0, yi, xf, 300);
	count += 1;
	xf += 10;
	yi += 10;
	console.log("Se han dibujado " + count+ " lineas");
}