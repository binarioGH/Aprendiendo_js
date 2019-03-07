function hide(whatShoudIdo){

	var text = document.getElementById("maintext");
	if(whatShoudIdo == "unhide"){
		text.hidden = false;
	}
	else{
		text.hidden=true;
	}
	
}

var b = document.getElementById("hidder");
b.addEventListener("click", function(){
	if(b.value == "hide"){
		b.value = "unhide";
		hide("hide");
	}
	else{
		b.value = "hide";
		hide("unhide");
	}
});
