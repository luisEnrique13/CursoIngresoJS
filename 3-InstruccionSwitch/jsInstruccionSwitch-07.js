function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;
	
	switch(destino){

		case "Bariloche":
			alert("Oeste");
			break; 
		case "Mar del Plata":
			alert("Este");
			break;
		case "Cataratas":
			alert("Norte");
			break;		
		case "Ushuaia":
			alert("Sur");
			break;	
	}

}//FIN DE LA FUNCIÓN