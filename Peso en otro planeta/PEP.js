var planeta = prompt("Ingresa el planeta en el que quieres medir tu peso: \n [1] marte \n [2] jupiter \n [3] venus");
var peso = prompt("Ingresa tu peso: ");
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.7;
var g_venus = 8.8;
if(planeta == 1){
	p_total("marte", peso * g_marte / g_tierra);
}
else if(planeta == 2){
	p_total("jupiter", peso * g_jupiter / g_tierra);
}
else if(planeta == 3){
	p_total("venus", peso * g_venus / g_tierra);
}
else{
	p_total("krypton", 100000000);
}
function p_total(planeta, peso){
	document.write("Tu peso en " + planeta + " es " + peso.toFixed(2));
}