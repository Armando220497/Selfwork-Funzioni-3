function contaCifre() {
    let numero = prompt("Inserisci un numero intero positivo (massimo 9999):");

    // Converti l'input in un numero intero
    numero = parseInt(numero);



    // Verifica se il numero è maggiore di 9999
    while (numero > 9999) {
        numero = prompt("Numero troppo grande. Inserisci un numero intero positivo (massimo 9999):");

    }

    // Verifica se è un numero intero positivo
    while (numero <= 0) {
        numero = prompt("Inserisci un numero intero positivo valido (massimo 9999):");
    }


    // Calcola il numero di cifre contando la lunghezza della stringa
    let lunghezza = numero.toString().length;

    //risultato
    switch (lunghezza) {
        case 1:
            return '1 cifra';
        case 2:
            return '2 cifre';
        case 3:
            return '3 cifre';
        case 4:
            return '4 cifre';

    }
}

console.log(contaCifre());


