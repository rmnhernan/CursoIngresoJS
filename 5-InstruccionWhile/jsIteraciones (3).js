function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador = 0;

while (clave.toLowerCase() != "utn750" && contador < 3){

    contador++;
    if (contador == 3){
        break;
    }

    clave = prompt("error! Ingrese la clave correcta")

}

if (contador ==3){
    alert ("intentos màximos ingresados");
} else {

alert ("Bienvenido");
}

}//FIN DE LA FUNCIÓN
