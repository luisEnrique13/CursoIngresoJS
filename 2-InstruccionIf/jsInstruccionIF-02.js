

//ALMACENO EN VARIABLE LA EDAD
let edad;

//COMIENZO DE FUNCION

function esMayorDeEdad(){
	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	if(edad>=18){
		return alert(`La Persona Es Mayor De Edad Tiene ${edad} años`);
	}
}
//FIN DE LA FUNCIÓN

function mostrar()
{
	
	esMayorDeEdad();
}
