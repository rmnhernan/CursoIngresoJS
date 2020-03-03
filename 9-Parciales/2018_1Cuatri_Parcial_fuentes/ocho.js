function mostrar()
{
var respuesta;
var numero;
var letra;
var contador = 0;
var contadorImpares = 0;
var contadorCeros = 0;
var contadorPositivos = 0; 
var acumuladorPositivos = 0;
var acumuladorNegativos = 0;
var promedioPositivos;
var contadorNegativos = 0;
var numeroMaximo;
var numeroMinimo;
var LetraMaximo;
var LetraMinimo;
var primeraVez = true

    numeroMaximo = -101
    numeroMinimo = 101
    
    do{
        do{
            letra = prompt("Ingrese una letra");
            if (letra == null ){
                break;
            }
            
            } while (!isNaN(letra));

        do {
            numero = prompt("Ingrese un número");
            numero = parseInt(numero);
            if(numero == null){
                break;
            }

        } while (isNaN(numero) || numero < -100 || numero > 100);

        if (numero != 0 && numero % 2 == 0){

            contador ++;
            } else if(numero % 2 != 0){
               
                contadorImpares ++
            }
        
        if (numero == 0){

            contadorCeros ++
            }

        if (numero > 0){

            contadorPositivos ++;
            acumuladorPositivos += numero;
            promedioPositivos = acumuladorPositivos / contadorPositivos;
            } else{

            contadorNegativos ++
            acumuladorNegativos += numero
            }

            /*if(primeraVez){

            primeraVez == false;
            numeroMaximo = numero;
            numeroMinimo = numero;
            LetraMaximo = letra;
            letraMinimo = letra;
*/

        if(numero > numeroMaximo){

                numeroMaximo = numero
                LetraMaximo = letra
            } else if ( numero < numeroMinimo){

                numeroMinimo = numero
                LetraMinimo = letra
            }   



               
        
    respuesta = confirm("Desea continuar ingresando datos?") 
        

    
    } while (respuesta);

alert("La cantidad de numeros pares es " + contador);    
alert("La cantidad de numeros impares es " + contadorImpares);
alert("La cantidad de ceros ingresados es " + contadorCeros);
alert("El promedio de todos los números positivos es " + promedioPositivos);
alert("La suma de todos los números negativos es " + acumuladorNegativos);
alert("El numero máximo es " + numeroMaximo +" y la letra correspondiente es " + LetraMaximo);
alert("El número mínimo es " + numeroMinimo + " y la letra correspondiente es "+ LetraMinimo);
}