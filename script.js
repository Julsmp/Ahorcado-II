/* ---------------------------------- */
/* By: Julia Martínez                 */
/* ---------------------------------- */
/* ---------------------------------- */

// Definimos la lista del juego
var ListaPalabras = ["Cerveza","Vino Tinto","Vino Dulce", "Sangria"];

//Variables globales
var palabraescogida = "";
var impresion = "";

function inicioJuego(){
    
}

// Escogemos un una palabra al azar
function escogerPalabra(){
    //Miramos el número total de palabras en la lista
    let numpalabras_lista = ListaPalabras.length
    //Escogemos un número al azar entre el total
    let num = 0
    num = Math.floor(Math.random()*(0-numpalabras_lista+0))+numpalabras_lista;
    //Escogemos la palabra al azar en base al num
    palabraescogida = ListaPalabras[num];
    
    console.log("El numero aleatorio es: "+ num);
    console.log("La palabra escogida es: "+ palabraescogida);
}

function imprimirletras(){
    
    let count = 0;

    while (count < palabraescogida.length) {
        count = count + 1 ;
        impresion = impresion + "_ ";
    }
    console.log(impresion);

    let letra_resultado=document.getElementById("titulo");
    letra_resultado.style.color = "#007a08";
    letra_resultado.innerHTML="La letra " + letra_resto.toUpperCase() + "<br>es correcta";
    let intro = document.getElementById("intro");
    intro.style.display = "none";
}

//Test
escogerPalabra();
imprimirletras();