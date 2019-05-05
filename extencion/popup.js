function justText(text){
	console.log("Inputed text: " + text);
	var newText = "";
	var bannedChars = "</%>"
	for(var char = 0; char < text.length; char++){
		if(bannedChars.indexOf(text[char]) == -1){
			newText += text[char];
		}
	}
	console.log("New text: " + newText);
	return newText;
}

var display = document.getElementById("Saludar");
var getName = document.getElementById("nombre");
var snd = document.getElementById("send");
snd.addEventListener("click", function(){
	text = justText(getName.value);
	if(text == "" || text == " "){
		text = "mundo";
	}
	display.innerHTML = "Hola " + text;
});