//Al presionar el botón pedir números hasta que 
//el USUARIO QUIERA e informar la suma acumulada y el promedio

function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta= true;

	while(respuesta == "si"){

		contador++;
		numero = prompt ("Ingrese un nùmero");
		
		var numero = parseInt(numero);

		respuesta = alert ("Para seguir ingresando nùmeros ingrese 'si'");

		acumulador = acumulador + numero;

		while (isNan(numero)){

			numero = prompt("ingrese numeros validos");
			numero = parseInt(numero);

		}

	} 	if()  


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

/* 	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var iterador

	iterador = prompt("cuantos numeros desea ingresar?")

	while (contador < iterador){

		contador ++;
		var numero = prompt("ingrese un numero");
		numero = parseInt(numero);
	}