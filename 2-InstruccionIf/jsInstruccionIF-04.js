let edad;
//INICIO DE FUNCION PARA VER SI ES ADOLESCENTE O NO
function esAdolescente(){
	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	if(edad>0){
	   if(edad>=13 && edad<=17){
		  return alert(`Es Adolescente Tiene ${edad} años`);
	   }
	   return ;
	}
	return alert(`*C asusta*`);
}
//FIN DE LA FUNCIÓN

function mostrar()
{
  esAdolescente();

}