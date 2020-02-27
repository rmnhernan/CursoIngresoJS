/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
    var numeroUno;
    var numeroDos;
    var operador;
    var operadorRandom;

    numeroUno = Math.floor(Math.random) * (11 - 1)) + 1
    numeroDos = Math.floor(Math.random) * (11 - 1)) + 1

    operadorRandom = Math.floor(Math.random) * (5 - 1)) + 1

    switch (operadorRandom){
        case 1:
            resultadoFinal = numeroUno + numeroDos;
            break;
        case 2:
            resultadoFinal = numeroUno - numeroDos;
            break;   
        case 3:
            resultadoFinal = numeroUno * numeroDos;
            break; 
        case 4:
            resultadoFinal = numeroUno / numeroDos;
            break; 
        default:
            break;


    document.getElementById("PrimerNumero").value = numeroUno
    document.getElementById("SegundoNumero").value = numeroDos
    document.getElementById("Operador").value = operador

        if (resultadoFinal == respuesta){

            
        }
	

}//FIN DE LA FUNCIÓN
function Responder()
{
    var resultadoFinal
    var respuesta

    respuesta = document.getElementById("Respuesta").value;

    respuesta = parseInt
	

}//FIN DE LA FUNCIÓN
