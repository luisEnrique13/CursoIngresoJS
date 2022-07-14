
let num1;
let num2;
let resultado;

function esMayorA10(unResultado){
    if(unResultado>10){
        alert(`El resultado es ${resultado} y supero el 10`)
    }
}

function mostrar()
{
    num1=parseInt(prompt("Ingresa el primer numero"));
    num2=parseInt(prompt("Ingresa el segundo numero"));

    if(num1>num2){
        resultado = num1-num2;
        alert(`El resultado es ${resultado}`);
    }
        else if(num1<num2){
            resultado = num1+num2;
            alert(`El resultado es ${resultado}`);
        }
            else{
                alert("numeros concatenados" + num1 + num2);
            }

        esMayorA10(resultado);

}
