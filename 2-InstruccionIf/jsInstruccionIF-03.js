let edad;
//INICIO DE LA FUNCION PARA VERIFICAR LA EDAD
function esMayorDeEdadONo(){
	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	if(edad>0){
	   if(edad>=18){
		  return alert(`La Persona Es Mayor De Edad Tiene ${edad} años`);
	   }
	      return alert(`La Persona Es Menor De Edad Tiene ${edad} años`);
    }
	return alert(`*C asusta*`)
}
//FIN DE LA FUNCIÓN

function mostrar()
{
	//Ejecuto la funcion esMayorDeEdadONo, que verifica la edad
	esMayorDeEdadONo();

}