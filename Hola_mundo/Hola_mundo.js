var saludo = prompt("Ingresa tu nombre: ");
// aquí hay una vulnerabilidad xss, porque el "document.write()" puede poner html en tu páginavar saludo = "Hola, mundo";
document.write("Hola " + saludo);
console.log("Hola " + saludo);
alert("Hola " + saludo);
