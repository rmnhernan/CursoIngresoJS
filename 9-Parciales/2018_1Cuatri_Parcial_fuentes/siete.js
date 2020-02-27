
 var nota;
 var sexo;
 var promedio;
 var contador = 0;
 var acumuladorNotas = 0;
 var notaMasBaja 
 var sexoNotaBaja;
 var contadorVarones = 0;

function mostrar()
{
    while (contador < 5){
        contador ++;
//iteraciones hasta que el usuario quiera:
//while(respuesta)
// respuesta = confirm() / respuesta "si" / ingrese la cantidad

   do {
    nota = prompt ("Ingrese la nota");
    nota = parseInt(nota);
   }
    while (isNaN(nota) || nota < 0 || nota > 10);

    do {

        sexo = prompt("Ingrese un sexo (f o m)");
    } while (sexo != "f" && sexo != "m");

}

// Punto A

acumuladorNotas += nota;

promedioNotas = acumuladorNotas / contador;
//tener cuidado de no dividir por cero
// en este caso sabemos que contador NUNCA es igual a cero

// Punto B

if (contador == 1){

    notaMasBaja = nota;

} else {

    if (nota < notaMasBaja){
        notaMasBaja = nota;
        sexoNotaBaja = sexo
    }
}

// Punto C

    if (nota >= 6 && sexo == "m"){

        contadorVarones ++;

    }


}
