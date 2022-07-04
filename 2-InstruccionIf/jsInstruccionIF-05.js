//INICIO DE FUNCION PARA VER SI ES ADOLESCENTE O NO
let edad;

function esAdolescente(){
	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	//if(edad>0){
	   if(edad<13 && edad<17){
		  return alert(`No Es Adolescente Tiene ${edad} años`);
	   }
	   return ;
	//}
}
//FIN DE LA FUNCIÓN

function mostrar()
{
	esAdolescente();

}