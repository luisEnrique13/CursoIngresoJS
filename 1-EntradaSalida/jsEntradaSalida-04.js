/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
let nombre;

function mostrar()
{
   //Guardo el dato que escribio el ususario en prompt
   nombre = prompt("Ingrese Su Nombre");  

   document.getElementById("txtIdNombre").value = nombre;
	 
}

