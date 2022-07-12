/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () 
{
     //para temperaturas con decimales poner "." 

    let temperatura = document.getElementById("txtIdTemperatura").value;
    let centigradosTotales = (temperatura-32) * (5/9);
    alert(`${temperatura}F es igual a ${centigradosTotales}C`);
}

function CentigradosFahrenheit () 
{   
    //para temperaturas con decimales poner "." 
    
    
    let temperatura = document.getElementById("txtIdTemperatura").value;
    let fahrenheitTotales = (temperatura * 1.8 ) + 32;
    alert(`${temperatura}C es igual a ${fahrenheitTotales}F`);
}

