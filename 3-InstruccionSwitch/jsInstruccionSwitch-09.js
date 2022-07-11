function mostrar()
{
	let estacion =document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	let descuento = 0;
	let aumento = 0;
	let precioFinal;
	const ESTADIA = 15000;
	
	
	switch(estacion){
   		case "Invierno":
			if(destino=="Bariloche"){
				aumento = 20;
			}
				else if(destino=="Cataratas" || destino == "Cordoba"){
					descuento=10;
				}
					else{
						descuento = 20;
					}
				break;

	case "Verano":
			if(destino=="Bariloche"){
				descuento = 20;
			}
				else if(destino=="Cataratas"||destino=="Cordoba") {
					aumento= 10;
				}
					else{
						aumento=20;
					}
				break;

	case "Primavera":
	case "Otoño":
			if(destino=="Bariloche" || destino=="Cataratas" || destino=="Mar del plata"){
				aumento=10;
			}
				else{
					precioFinal= ESTADIA;
				}
				break;

	}



	if(aumento != 0 ){
		precioFinal = ESTADIA + ESTADIA * (aumento/100);

	}
		else if(descuento != 0){
			precioFinal = ESTADIA - ESTADIA *(descuento/100);
			
		}
			else{
				precioFinal = precioFinal;
			}

			console.log(`El precio Final Es $ ${precioFinal}`);










}//FIN DE LA FUNCIÓN