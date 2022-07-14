
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;
let eleccionMaquina =0;


function numeroRandomEntre(min, max) {
	//genero el número RANDOM entre x y x 
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
  }

function comenzar()
{

console.log( eleccionMaquina = numeroRandomEntre(1,3));

}    



function piedra()
{

    switch(eleccionMaquina){
             case 2:
				ContadorDePerdidas+=1;
				//document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
                alert(`Perdiste`);
                break;

             case 3:
				ContadorDeGanadas+=1;
				//document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
                alert(`Ganaste`);
                break;
             default : 
				ContadorDeEmpates+=1;
				//document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
			 	alert(`Empataste`);

    }

	mostrarResultado();


}  
function papel()
{   
	
    switch(eleccionMaquina){
         case 3:
            ContadorDePerdidas+=1;
			//document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
			alert(`Perdiste`);
            break;

         case 1:
            ContadorDeGanadas+=1; 
			//document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
            alert(`Ganaste`);

            break;
         default : 
		 	ContadorDeEmpates+=1;
			//document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
		 	alert(`Empataste`);

        }  

		mostrarResultado();
	
	
        
}
function tijera()
{ 
	
    switch(eleccionMaquina){
         case 1:
			ContadorDePerdidas+=1;
			document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
            alert(`Perdiste`);
            break;

         case 2:
			ContadorDeGanadas+=1;
			document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
            alert(`Ganaste`);
            break;
         default :
		 	ContadorDeEmpates+=1;
			document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
			alert(`Empataste`);

    }

	mostrarResultado();


}
function mostrarResultado()

{ 	 alert(`Ganadas ${document.getElementById("txtIdGanadas").value = ContadorDeGanadas}`); 
	 alert(`Perdidas ${document.getElementById("txtIdPerdidas").value = ContadorDePerdidas}`);
	 alert(`Empatadas ${document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates}`);
}