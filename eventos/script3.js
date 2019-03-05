function f(id){
	console.log(id);
}

var age = document.getElementById("edad");
age.addEventListener("onChange", function(){
	console.log("hola")});