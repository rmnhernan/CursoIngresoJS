/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo

    var resultado 

    var final

    sueldo = document.getElementById("importe").value;

    resultado = document.getElementById("importe").value * 0.75;

    final = document.getElementById("resultado").value = resultado;
}
