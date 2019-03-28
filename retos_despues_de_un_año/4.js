function isVowel(letter){
	vowels = "aeiou";
	if(vowels.indexOf(letter.toLowerCase()) != -1){
		return true;
	}
	return false;
}