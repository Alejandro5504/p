const DNI = document.getElementById("dni");// alamacenar datos
const LETRAS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//crear array con letras par apoder compararalas

function comprobar() {


    let dni = DNI.value;// convertir los datos
    console.log('dni', dni);//comprobacion
    let numerodni = parseInt(dni);//separa numeros de letras
    console.log('numerodni', numerodni);//comprobar
    let letradni = dni.charAt(8).toUpperCase();// alamcenar la letra final en una variable
    console.log(letradni)
    let longitud = dni.length;// comprobar longitud del campo introducido con HTML
    let residuo = numerodni % 23;//calcular el valor del array de letras
    console.log(residuo);
    if (longitud > 9 || longitud < 9) { //comprobar si la longitus del cmapo de datos es correcta

        document.getElementById("p1").innerHTML = "el dni esta mal";

    } else if (LETRAS[residuo] == letradni) {// pon el cursor del ordenador del array de letras en la posicion que te de el residuo y pon

        document.getElementById("p1").innerHTML = "correcto";

    }else {

   
    document.getElementById("p1").innerHTML = "incorrecto"; 

    }
}
