function sumar(n1, n2){
	return n1 + n2;
}
var boton = document.getElementById("b");
boton.addEventListener("onclick", function(){
	var numero1 = parseInt(document.getElementById("num1").value);
	var numero2 = parseInt(document.getElementById("num2").value);	
	alert( sumar(numero1, numero2));
});