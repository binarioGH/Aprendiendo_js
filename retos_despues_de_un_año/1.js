function max(n1, n2){
	var mx = 0;
	if(n1 >= n2 ){
		mx = n1;
	}
	else{
		mx = n2;
	}
	return mx;
}

var n1 = prompt("Ingresa el primer numero: ");
var n2 = prompt("Ingresa el segundo numero");

n1 = parseInt(n1);
n2 = parseInt(n2);
$("#resp").text(max(n1,n2));