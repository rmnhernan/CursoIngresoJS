function mostrar()
{

var sexo = prompt("ingrese f ó m .");


while (sexo.toLowerCase != "f" && sexo.toLocaleLowerCase != "m"){

    sexo = prompt("Error, ingrese f o m");
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN