/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    /* Usar operador % para sacar resto*/

    var texto1;

    var texto2;

    var resto;

    texto1 = document.getElementById("numeroDividendo").value;

    texto2 = document.getElementById("numeroDivisor").value;

    resto = parseInt(texto1) % parseInt(texto2);

    alert("el resultado es " +resto);
	
}
