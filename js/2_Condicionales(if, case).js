//Condicionales

var anio, edad;

// anio = parseInt(prompt("Introducir año de nacimiento: "));
// edad = parseInt(prompt("Introducir edad: "));

// if(edad > 17){
//     alert("Es mayor de edad");
// }else{
//     alert("Es menor de edad");
// }

var dia;
dia = parseInt(prompt("Ingrese un día entree 1 y 7"));

switch(dia){
    case 1: alert("LUNES");
            break;

    case 2: alert("MARTES");
            break;

    case 3: alert("MIERCOLES");
            break;

    case 4: alert("JUEVES");
            break;

    case 5: alert("VIERNES");
            break;

    case 6: alert("SABADO");
            break;

    case 7: alert("DOMINGO");
            break;

    default: alert("Valor fuera de rango...");
}