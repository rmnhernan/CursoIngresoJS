/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	    var texto1;

    var texto2;

    var suma;

    texto1 = document.getElementById("numeroUno").value;

    texto2 = document.getElementById("numeroDos").value;

    suma = parseInt(texto1) + parseInt(texto2);

    alert("el resultado es " +suma);
}

function restar()
{
	    var texto1;

    var texto2;

    var suma;

    texto1 = document.getElementById("numeroUno").value;

    texto2 = document.getElementById("numeroDos").value;

    suma = parseInt(texto1) - parseInt(texto2);

    alert("el resultado es " +suma);
}

function multiplicar()
{ 
	    var texto1;

    var texto2;

    var suma;

    texto1 = document.getElementById("numeroUno").value;

    texto2 = document.getElementById("numeroDos").value;

    suma = parseInt(texto1) * parseInt(texto2);

    alert("el resultado es " +suma);
}

function dividir()
{
	    var texto1;

    var texto2;

    var suma;

    texto1 = document.getElementById("numeroUno").value;

    texto2 = document.getElementById("numeroDos").value;

    suma = parseInt(texto1) / parseInt(texto2);

    alert("el resultado es " +suma);
}

