let edad;
let estadocivil;

function verificarEdadYestadoCivil(){
	estadocivil = estadocivil = document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value;
	if(edad<18 && estadocivil!="Soltero"){
		return alert(`Es muy pequeño para NO ser soltero`);
	 }
	 return ;
}


function mostrar()
{
verificarEdadYestadoCivil();

}//FIN DE LA FUNCIÓN