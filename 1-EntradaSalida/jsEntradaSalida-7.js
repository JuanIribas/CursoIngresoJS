/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno;
    var numeroDos;
    var resultado;
    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno + numeroDos;
    alert("La suma da por resultado " + resultado);
}

function restar()
{
    var numeroUno;
    var numeroDos;
    var resultado;
    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno - numeroDos;
    alert("La resta da por resultado " + resultado);
}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var resultado;
    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno * numeroDos;
    alert("La multiplicación da por resultado " + resultado);
}

function dividir()
{
    var numeroUno;
    var numeroDos;
    var resultado;
    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno / numeroDos;
    alert("La división da por resultado " + resultado);
}

