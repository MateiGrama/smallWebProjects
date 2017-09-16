
    function execute(){
    	var firstTerm = document.getElementById("input1").value;
    	var secondTerm = document.getElementById("input2").value;
    	var operation = document.getElementById("operation").value;
    	if(firstTerm && secondTerm){
    		while(firstTerm != firstTerm.replace(' ' , ",")){
    			firstTerm=firstTerm.replace(' ' , ",");
    		}
    		while(firstTerm != firstTerm.replace('\n' , ";")){
    			firstTerm=firstTerm.replace('\n' , ";");
    		}
    		while(secondTerm != secondTerm.replace(' ' , ",")){
    			secondTerm=secondTerm.replace(' ' , ",");
    		}
    		while(secondTerm != secondTerm.replace('\n' , ";")){
    			secondTerm=secondTerm.replace('\n' , ";");
    		}
        	
        	if(operation=='^'){
        		var ecuation ='['+ firstTerm+']'+operation+'('+ secondTerm+')';
        	}
        	else{
        		var ecuation ='['+ firstTerm+']'+operation+'['+ secondTerm+']';
        	}
        	console.log(ecuation);
        	try{
        		print(math.eval(ecuation));
        	}
        	catch(err){
        		document.getElementById("output").innerHTML = err.message;
    	   }
        }
        else{
            document.getElementById("output").innerHTML ='Please fill the imputs before executing :)';
        }
    }

    function print(value) {

    	document.getElementById("output").innerHTML = null;
       
    	/*for(var i=0;i<value.lenght;i++){
    		for(var j=0;j<value[i].lenght;j++){
    			document.getElementById("output").innerHTML += (value[i][j]+' ');   
    		}
    		document.getElementById("output").innerHTML += '<br>';
    	}*/

       document.getElementById("output").innerHTML ='Result:   '+ value;
       console.log(value);
    }