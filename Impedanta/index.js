var proba = function(){
	var u = document.getElementById("U").value;
	var i = document.getElementById("I").value;
	var z = u/i;

	if(z<=185 && z>=155 ){
		document.getElementById("html").style.background="green";
	}
	else{
		document.getElementById("html").style.background="red";
	}
	
}