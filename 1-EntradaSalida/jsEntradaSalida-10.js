/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
let importe;
let aumento;
let resultado;

function mostrarAumento()
{
	importe = parseInt(document.getElementById('txtIdImporte').value);
    aumento = (importe*25)/100;
	resultado = parseInt(document.getElementById('txtIdResultado').value = importe-aumento); 
	alert(`El importe con 25% de descuento es ${resultado}`);
}
