/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
let perimetro;
let alambre;
let ancho;
let largo;

function Rectangulo () 
{
   
    largo =parseInt(document.getElementById("txtIdLargo").value);
    ancho =parseInt(document.getElementById("txtIdAncho").value);
    perimetro = (ancho + largo)*2;
    alambre = perimetro * 3;

    alert(`se necesita comprar ${alambre} metros de alambre`);

}
function Circulo () 
{
    let radio;
    radio = parseInt(document.getElementById("txtIdRadio").value);
    perimetro = 2 * Math.PI * radio;
    alambre = perimetro *3;

    alert(`se necesita comprar ${alambre.toFixed(2)} metros de alambre`);
}
function Materiales () 
{

    let area;
    let cemento;
    let cal;

    largo =parseInt(document.getElementById("txtIdLargo").value);
    ancho =parseInt(document.getElementById("txtIdAncho").value);
    area = largo * ancho;
    cemento = area * 2;
    cal = area * 3 ;

    alert(`Se necesitan ${cemento} bolsas de cemento y ${cal} bolsas de cal`);

 
 

	
}