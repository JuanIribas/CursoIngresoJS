function mostrar()
{
//tomo la edad  
    var edad = document.getElementById("edad").value;
    var estadoCivil = document.getElementById("estadoCivil").value;
    edad = parseInt(edad);
    if (edad >= 18 && estadoCivil == "Soltero") {
        alert ("No es menor y es soltero")
    }
}//FIN DE LA FUNCIÓN