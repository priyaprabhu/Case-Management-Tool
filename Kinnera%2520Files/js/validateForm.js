  

  	
function Validate(txt) {
 
 		var message="";
            txt.value = txt.value.replace(/[^a-zA-Z 0-9\n\r]+/g, '');
            if((txt.value).length < 1) 
            	{
            	 message = "min 1 character is required";
		        } else if((txt.value).length > 17)
		        {
		        	message= "maximum 17 characters only";
		        }
		        
	document.getElementById("error").innerHTML = message;
        }
  
  function dtcValidate(){
  	var value, message="";
  		value= document.getElementById("dtc").value;
  		if(value.length<1){
  			message= "min 1 caharacter is needed";
  		}
  		else if(value.length> 20){
  			message=" max 20 characters olnly";
  		}
document.getElementById("dtcError").innerHTML= message;
  }
 function issueValidate(){
  	var value, message="";
  		value= document.getElementById("issue").value;
  		if(value.length<10){
  			message= "min 10 caharacter is needed";
  		}
  		else if(value.length> 240){
  			message=" max 240 characters olnly";
  		}
  	document.getElementById("issueError").innerHTML= message;	
  }
 
  function nameValidate(){
  	var value, message="";
  		value= document.getElementById("name").value;
  		if(value.length< 4){
  			message= "min 4 caharacter is needed";
  		}
  		else if(value.length> 400){
  			message=" max 400 characters olnly";
  		}
  	document.getElementById("nameError").innerHTML= message;	
  }
   function telephoneValidate(){
            var number, message="";
            number = document.getElementById("tel").value;

            if(isNaN(number)){
                message = "pleasee enter integers values only";
            }
            else if(number.length < 10  || number.length > 10 ){
                message= " please enter a 10 digit number";
            }
            
    document.getElementById("Error").innerHTML= message;

  }
  function primaryValidate(){
            var number, message;
            number = document.getElementById("tel").value;

            if(isNaN(number)){
                message = "pleasee enter integers values only";
            }
            else if(number.length < 10  || number.length > 10 ){
                message= " please enter a 10 digit number";
            }
            else{
                message="";
            }
    document.getElementById("primaryError").innerHTML= message;

  }function alternateValidate(){
            var number, message;
            number = document.getElementById("tel").value;

            if(isNaN(number)){
                message = "pleasee enter integers values only";
            }
            else if(number.length < 10  || number.length > 10 ){
                message= " please enter a 10 digit number";
            }
            else{
                message="";
            }
    document.getElementById("alternateError").innerHTML= message;

  }
  function contactValidate(){
  	var name, message="";
  		name= document.getElementById("contact").value;
  		if(name.length< 2){
  			message= "min 2 caharacter is needed";
  		}
  		else if(name.length> 64){
  			message=" max 64 characters olnly";
  		}
  	document.getElementById("contactError").innerHTML= message;	
  }
  function emailValidate(){
  	var name, message="";
  		name= document.getElementById("email").value;
  		if(name.length< 4){
  			message= "min 4 caharacter is needed";
  		}
  		else if(name.length> 254 ){
  			message=" max 254 characters olnly";
  		}
  	document.getElementById("emailError").innerHTML= message;	
  }
 