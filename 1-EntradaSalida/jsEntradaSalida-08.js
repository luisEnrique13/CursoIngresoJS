/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
let num1;
let num2;
var cuenta;

function SacarResto()
{
    num1 = parseInt(document.getElementById('txtIdNumeroDividendo').value);
	num2 = parseInt(document.getElementById('txtIdNumeroDivisor').value);
    cuenta = (num1 % num2);
	alert(`el resto de ${num1} y ${num2} es ${cuenta}`);
}

