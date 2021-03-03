
class Lista {

    constructor() {
        this.palabras = [];
    }

    crearListaVacia() {
        this.palabras = ["Casa","Patata","Zanahoria","piso"];
        return this.palabras;
    }

    insertar (palabra) {
        this.palabras.push(palabra);
        return this.palabras;
    }

    esListaVacia() {
        //si la lista tiene 0 elementos extrictamente 
        return (this.palabras.length === 0);
    }

    imprimirLista() {
        console.log(this.palabras);
    }

}