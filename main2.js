// Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer. L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari". Il computer genera un secondo numero casuale tra 1 e 5. Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)

// chiedo all'utente un numero compreso tra 1 e 5

var numero_utente;

do {
    numero_utente = parseInt(prompt('Inserisci un numero tra 1 e 5 compresi'));
} while (isNaN(numero_utente) || numero_utente <= 0 || numero_utente > 5);

console.log('Il numero che hai scelto è ' + numero_utente);

// ora l'utente deve scegliere tra pari e dispari
var scelta_utente;

do {
    scelta_utente = prompt('Il risultato finale sarà un numero pari o dispari?');
} while (scelta_utente != 'pari' && scelta_utente != 'dispari');
console.log('Hai scelto ' + scelta_utente);

// genero un numero per il computer
var numero_pc = getRndInteger(1, 5);
console.log('Il computer ha generato il numero ' + numero_pc);

// sommo il numero scelto dall'utente e quello generato dal computer
var somma = numero_utente + numero_pc;
console.log('Il numero finale è ' + somma);
// controllo se la var somma è pari(0) o dispari (1)
var risultato = '';
if (sePari(somma)) {
    risultato = 'pari';
} else {
    risultato = 'dispari';
}

// controllo se l'utente vince
if (vittoria(scelta_utente, risultato)) {
    console.log("Hai vinto!!!");
} else {
    console.log("Hai perso perso!!!");
}

// funzione che genera un numero casuale tra min e max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione che stabilisce se un numero è pari o dispari

// restituisce true se pari, false altrimenti
function sePari(numero) {
    if(numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function vittoria(scelta1, scelta2) {
    if(scelta1 == scelta2) {
        return true;
    }
    else {
        return false;
    }
}
