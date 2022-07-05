function numeroRandomEntre(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
  }

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	alert(`el numero que te salio es ${numeroRandomEntre(1,10)}`);	

}//FIN DE LA FUNCIÓN