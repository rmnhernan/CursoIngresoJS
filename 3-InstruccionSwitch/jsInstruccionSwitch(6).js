function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

switch (key) {
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        alert("Es de mañana");
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        alert("Es de tarde");
        break;
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
        alert("Es de noche");
        break;
    

    default:
        alert("La hora no existe");
        break;
}


}//FIN DE LA FUNCIÓN