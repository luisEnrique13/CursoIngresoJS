/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
let sueldo;
let aumento;
let resultado

function mostrarAumento()
{
	sueldo = parseInt(document.getElementById('txtIdSueldo').value);
    aumento = (sueldo*10)/100;
	resultado = parseInt(document.getElementById('txtIdResultado').value = sueldo+aumento); 
	
	alert(resultado);
}
