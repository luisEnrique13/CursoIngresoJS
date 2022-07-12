/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto;
let contadorIntentos = 0;
let numeroIngresado;
let intentos;

function numeroRandomEntre(min, max) {
	//genero el número RANDOM entre x y x 
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
function comenzar()
{
  numeroSecreto = numeroRandomEntre(1, 100);
  //console.log(`numero secreto ${numeroSecreto}`);
  console.log(`numero secreto es ${numeroSecreto}`);
 
}

function verificar(){

  numeroIngresado =parseInt(document.getElementById("txtIdNumero").value);
   switch(numeroIngresado){
          case numeroSecreto:
            contadorIntentos+=1;
            intentos = parseInt(document.getElementById("txtIdIntentos").value = contadorIntentos);
            break;
            
            default: 
            contadorIntentos+=1;
            intentos = parseInt(document.getElementById("txtIdIntentos").value = contadorIntentos);

                    }
                 
  

  if(numeroIngresado>numeroSecreto){  
    //console.log(`Su numero secreto era ${numeroSecreto} y se paso por ${(numeroIngresado - numeroSecreto) } numeros`);
    alert(`Su numero secreto era ${numeroSecreto} y se paso por ${(numeroIngresado - numeroSecreto) } numeros`);
     }
        else if(numeroIngresado<numeroSecreto){
          //console.log(`Su numero secreto era ${numeroSecreto} y le faltaron ${(numeroSecreto - numeroIngresado)} numeros para llegar`);
          alert(`Su numero secreto era ${numeroSecreto} y le faltaron ${(numeroSecreto - numeroIngresado)} numeros para llegar`);
          }
              else{
               //console.log(`Usted es un ganador!!! su numero secreto era ${numeroSecreto}, y en tan solo  ${intentos} intentos`);
               alert(`Usted es un ganador!!! su numero secreto era ${numeroSecreto}, y en tan solo  ${intentos } intentos`);
              }
	  }
  