function numeroRandomEntre(min, max) {
	//genero el número RANDOM entre x y x 
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
  }

function verificarNota(){
	nota = numeroRandomEntre(0,10);
	if(nota>=9){
		return alert (`EXCELENTE, su nota es ${nota}`);
	}
	    if ( nota>=4 && nota<9){
	        return alert(`APROBO, su nota es ${nota}`);
		}
		  else {   if(nota<4){
		             return alert(`Vamos, la proxima se puede, su nota es ${nota}`);
		           } 
	           }
}

function mostrar()
{
	
 verificarNota();

}
//FIN DE LA FUNCIÓN