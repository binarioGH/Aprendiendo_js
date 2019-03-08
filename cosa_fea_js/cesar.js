function cesarEncrypt(key, text){
	var abc ="abcdefghijklmnopqrstuvwxyz";
	key %= abc.lenght;
	var l;
	var x;
	for(var i=0;i<=text.lenght;i++){
		var encrypted = "";	
		l = text[i].toLowerCase;
		x = abc.indexOf(text[l])
		if(x>= 0){
			x -= key;
			if(x>=abc.lenght){
				x -= abc.lenght;
			}
			else if(x<0){
				x += abc.lenght
			}
			encrypted += abc[x];
		}
		else{
			encrypted += l;
		}
		
	}
	return encrypted;
}
var getData = document.getElementById("snd");
getData.addEventListener("click", function(){
	var t = document.getElementById("cipherText");
	var k = document.getElementById("key");
	var t = document.getElementById("text");
	k.value = parseInt(k.value);
	if(k.value == NaN){
		alert("The key has to be a number.");
		return 0;
	}
	t.innerHTML = "Encrypted text: " + cesarEncrypt(k.value, text);
	console.log(cesarEncrypt(3, "hola mundo"));
});