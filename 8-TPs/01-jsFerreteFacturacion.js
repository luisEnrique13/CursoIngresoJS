/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
let precio1;
let precio2;
let precio3;
let resultado;
let iva;

function Sumar () 
{    
     precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
     precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
     precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
     resultado = precio1 + precio2 + precio3;
     alert(`El precio total es ${resultado}`);
	
}
function Promedio () 
{
	 precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
     precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
     precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
     resultado = (precio1 + precio2 + precio3)/3;
     alert(`El promedio total es ${resultado}`);
}
function PrecioFinal () 
{
	 precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
     precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
     precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
     iva = ((precio1 + precio2 + precio3) *21) / 100;
     resultado = precio1 + precio2 + precio3 + iva;
     alert(`El precio final con iva es ${resultado}`);
}