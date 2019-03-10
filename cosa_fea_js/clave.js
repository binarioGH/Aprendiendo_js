var sp = document.getElementById("seepsw");
sp.addEventListener("click",function(){
	console.log("prueba")
	var k = document.getElementById("clave");
	var c = document.getElementById("conf");
	if(sp.value == "ver"){
		sp.value = "ocultar"
		k.type ="text";
		c.type= "text";
	}
	else{
		sp.value = "ver";
		k.type="password";
		c.type="password";
	}
});
var d = document.getElementById("done");
d.addEventListener("click", function(){
	var k1 = document.getElementById("clave");
	var k2 = document.getElementById("conf");
	k1 = k1.value;
	k2 = k2.value;
	if(k1 == k2){
		alert("Se ha cambiado la clave con exito.");
	}
	else{
		alert("Las claves no son iguales, vuelva a intentar.");
	}
});