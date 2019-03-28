function maxInList(nums){
	var max = 0;
	for(var i=0;i<nums.length;i++){
		if(nums[i] >= max){
			max = nums[i];
		}
	}
	return max;
}
var numeros = new Array();

var n = 1;
while(n >= 0){
	n = prompt("Ingresa un numero a la lista, si es menor a 0 se romperá el ciclo");
	if(!isNaN(n) && n >= 0){
		numeros.push(n);
	}
}
$("#resp").text(maxInList(numeros));
