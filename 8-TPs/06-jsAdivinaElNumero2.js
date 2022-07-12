/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/



let numeroSecreto;
let cuenta;
let contadorIntentos = 0;
let numeroIngresado;
let intentos;
//-----------------------------------------------------------------------------------------------------------------------------------------------

function numeroRandomEntre(min, max) {
	//genero el número RANDOM entre x y x 
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
  }
//-----------------------------------------------------------------------------------------------------------------------------------------------

function comenzar(){

  numeroSecreto = numeroRandomEntre(1, 100);
  //console.log(`numero secreto ${numeroSecreto}`);
  //alert(`numero secreto es ${numeroSecreto}`);
 
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
function verificar(){
	numeroIngresado =parseInt(document.getElementById("txtIdNumero").value);
	console.log(contadorIntentos+=1);
	intentos = parseInt(document.getElementById("txtIdIntentos").value = contadorIntentos);

	switch(intentos){
		case 1: 
		alert(`Usted es un Psiquico`);
			break;
		case 2:
			alert(`excelente percepcion`);
			break;
		case 3:
			alert(`Esto es suerte`);
			break;
	
		case 4:
			alert(`Excelente tecnica`);
			break;
	
		case 5:
			alert(`Esto es suerte`);
			break; 

		case 6:
		case 7:			
		case 8:
		case 9:		
		case 10:
			alert(`Falta tecnica`);
			break;

		default: alert("afortunado en el amor!!")
	
    }

		
		if(numeroIngresado>numeroSecreto){  
			//console.log(`Su numero secreto era ${numeroSecreto} y se paso por ${(numeroIngresado - numeroSecreto) } numeros`);
			alert(`Su numero secreto era ${numeroSecreto} y se paso por ${(numeroIngresado - numeroSecreto) } numeros`);
			 }
				else if(numeroIngresado<numeroSecreto){
				  //console.log(`Su numero secreto era ${numeroSecreto} y le faltaron ${(numeroSecreto - numeroIngresado)} numeros para llegar`);
				  alert(`Su numero secreto era ${numeroSecreto} y le faltaron ${(numeroSecreto - numeroIngresado)} numeros para llegar`);
				  }
					  else{
						//console.log(`Usted es un ganador!!! su numero secreto era ${numeroSecreto}, y en tan solo  ${intentos} intentos`);
					   alert(`Usted es un ganador!!! su numero secreto era ${numeroSecreto}, y en tan solo  ${intentos} intentos`);
					  }

}





//-----------------------------------------------------------------------------------------------------------------------------------------------
  
	  



  



