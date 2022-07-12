/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
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

}   //FIN DE LA FUNCIÓN     
function piedra()
{
    switch(eleccionMaquina){
             case 2:
                alert(`Perdiste`);
                break;

             case 3:
                alert(`Ganaste`);
                break;
             default : alert(`Empataste`);

    }

}  //FIN DE LA FUNCIÓN
function papel()
{
    switch(eleccionMaquina){
         case 3:
            alert(`Perdiste`);
            break;

         case 1:
            alert(`Ganaste`);
            break;
         default : alert(`Empataste`);

        }  //FIN DE LA FUNCIÓN
}
function tijera()
{ 
    switch(eleccionMaquina){
         case 1:
            alert(`Perdiste`);
            break;

         case 2:
            alert(`Ganaste`);
            break;
         default : alert(`Empataste`);

    }



}  //FIN DE LA FUNCIÓN