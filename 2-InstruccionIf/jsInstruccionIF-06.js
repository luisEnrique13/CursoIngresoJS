let edad;
//INICIO DE LA FUNCION PARA VERIFICAR LA EDAD
function esMayorAdolescenteOniño(){
	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	if(edad>0){
	   if(edad>=18){
		  return alert(`La Persona Es Mayor De Edad Tiene ${edad} años`);
	   }
	       if(edad>=13 && edad<=17){
		        return alert(`Es Adolescente Tiene ${edad} años`);
	       }
		   else {
			return alert(`Es un niño su edad es ${edad}`);
		   }
    }
	return alert(`*C asusta*`)
}

function mostrar()
{
	esMayorAdolescenteOniño();

}//FIN DE LA FUNCIÓN