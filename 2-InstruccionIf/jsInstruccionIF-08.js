
let edad;
let estadocivil;

function verificarEdadYestadoCivil(){
	estadocivil =  document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value;
	    if(edad<18 && estadocivil!="Soltero"){
		return ;
	    }
		 
	      else{
		     	if(edad>=18 && estadocivil=="Soltero"){
			  	return alert("Es soltero y no es menor");
		    	}
			}

}

function mostrar() 
{
	verificarEdadYestadoCivil();

}