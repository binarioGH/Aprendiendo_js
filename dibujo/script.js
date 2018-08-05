var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var max = 300;
var min = 10;
var count = 0;
while(count < 30){
	draw(min, max)
	min += 10;
	count += 1;
}

function draw(n1, n2){
	lienzo.beginPath();
	lienzo.strokeStyle = "red";
	lienzo.moveTo(0, n1);
	lienzo.lineTo(n2, n2);
	lienzo.stroke();
	lienzo.closePath();
}
