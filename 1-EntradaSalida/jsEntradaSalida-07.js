/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
let num1;
let num2;

function sumar()
{	
    
	num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
		
	alert(num1+num2);
}

function restar()
{
	num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
		
	alert(num1-num2);	
}

function multiplicar()
{
	num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	
	alert(num1*num2);	
}

function dividir()
{
	num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
		
	alert(num1/num2);	
}

