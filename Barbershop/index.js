var n= 10;
var acronime = [0,'f','b','a'];
var nume = [0, 'frizuri','barbierit','articole'];

var pret = [[ 25, 30, 30 ,25, 40, 25, 30 ,25, 40, 35],
			[ 15, 20, 20 ,15, 30, 35, 20 ,25, 10, 15],
			[ 11, 43, 33 ,55, 30, 26, 89 ,23, 30, 95]
		];

var selected = [];
for(var i=1;i<=3;i++){
	selected[i]=[];
	for(var j=1;j<=n;j++){
		selected[i][j]=0;
	}
}

$(function () {

	
	
	var baseUrl='./images/';
	var container= [];

	for(var j=1;j<=3;j++){

		container[j] = $("#"+nume[j]);
		
		for(var i=1;i<=n;i++){
			var id = acronime[j] + i;
			$('#'+nume[j]).append($('<img>')
							.prop('src', baseUrl+ id + '.jpg')
							.prop('class', 'img')
							.attr('onclick','select("'+id+'")')
							.prop('id',id)
							)
		         //.prop('href', baseUrl + '.png')
		         .appendTo(container[j]);

	 	}
 	}


 
})
 
function select( id ){
	
	indici = [];
	
	if(id[0]=='f'){indici[0]=1;}
	else{ if(id[0]=='b'){indici[0]=2;}
		else if(id[0]=='a'){indici[0]=3;}
		}
	indici[1]= parseInt(id[1]); 


	if(selected[indici[0]][indici[1]]==1){
		selected[indici[0]][indici[1]] = 0;
		$("#"+id).css("border-color","rgba(0,0,0,0)");	
	}
	else{
		if(indici[0]==3){

			selected[3][indici[1]] = 1;
			$("#"+id).css("border-color","#289e93");
		}
		else{
			for(var i=1;i<=n;i++){
				if(selected[indici[0]][i]==1){
					
					selected[indici[0]][i]=0;
					$("#"+acronime[indici[0]]+i).css("border-color","rgba(0,0,0,0)");	
					
					
				}
			}
			selected[indici[0]][indici[1]]=1;
			$("#"+id).css("border-color","#289e93");
		}
	}

}


function calc(){
	total = 0;

	for(var i=1;i<=3;i++){
		for(var j=1;j<=n;j++){
			if(selected[i][j]==1){
				total+=pret[i-1][j-1];
			}
		}
	}
	if(total==0){
		document.getElementById("output").innerHTML="Nu ai selectat nimic..";
	}
	else{
		document.getElementById("output").innerHTML=total+" lei. Atat te costa, nici mai mult nici mai putin.";
	}
}