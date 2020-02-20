function mostrar()
{

	var contador=0;
	var acumulador=0;

	while (contador < 5){

		contador++;

		var numero = prompt ("Ingrese un numero valido");
		//aca validamos
		numero = parseInt(numero);
		
		//si el numero es NaN, vuelvo a pedir un numero y parseo de nuevo
		while (isNaN(numero)){

			numero = prompt("Ingrese un numero valido");

			numero = parseInt(numero);
		}

		//despues acumulamos
		acumulador += numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN