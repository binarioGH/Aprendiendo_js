var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");


draw("red", 10, 300, 220, 10);
draw("pink", 300, 10, 10, 220);

function draw(color, x1, x2, y1, y2){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(x1, x2);
	lienzo.lineTo(y1, y2);
	lienzo.stroke();
	lienzo.closePath();
}