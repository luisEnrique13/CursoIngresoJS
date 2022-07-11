function mostrar()
{
	//tomo el mes
	let mes =document.getElementById("txtIdMes").value;
	switch(mes){
		case "Febrero" : alert("tiene 28 dias");
	    break; 

		case "Abril" :  
		case "Septiembre" : 
		case "Noviembre" :
		case "Junio" : alert("tiene 30 dias");
		break;

		default: alert("tiene 31 dias");	
	}

}//FIN DE LA FUNCIÓN