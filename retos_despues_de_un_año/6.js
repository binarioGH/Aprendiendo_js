function inversa(word){
	var reverse = "";
	for(var i = word.length-1;i >= 0;i--){
		reverse += word[i];
	}
	return reverse;
}

function palindromo(word){
	if(word == inversa(word)){
		return true;
	}
	return false;
}