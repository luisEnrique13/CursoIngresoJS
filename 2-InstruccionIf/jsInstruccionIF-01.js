let edad;

function controladorEdad(){
	edad = document.getElementById("txtIdEdad").value;
  if(edad == 15){
	return alert("niña bonita");
  }
  return alert("no niña bonita");

}
function mostrar()
{
	controladorEdad();
}//FIN DE LA FUNCIÓN