function mostrar()
{
    var respuesta;
    var numero;
    var letra;


    do {
        //tomar y validar datos
        do{
            numero = prompt("Ingrese un numero");
            numero = parseInt(numero);
            if (numero == false){
                break;
            }

        

        } while (isNaN(numero) || numero < - 100 || numero > 100);

        do{
            letra = prompt("Ingresa una letra");
        } while(!isNaN(letra));

        //Punto A

        respuesta = confirm("Desea continuar?")

    } while (respuesta);

    if ()    


   }





}
