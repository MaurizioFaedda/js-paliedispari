// Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no

// funzione per invertire una qualsiasi parola
function parolaInversa(parola){

    // la parola viene spezzettata e ogni carattere_reverse diventa un elemnento di un array
    var caratteri = parola.split('');

    // rovescio dalla fine all'inizio tutti i caratteri(elemnenti) dell'array
    var carattere_reverse = caratteri.reverse();

    // ricompongo la parola unendo gli elementi dell'array e ricostruendo la parola
    var stringa_reverse = carattere_reverse.join('');

    return stringa_reverse;
}

// funzione check se la parola è uguale a se stessa anche al contrario o no
function parolaPalindroma(parola) {
    if(parola == parolaInversa(parola)) {
        return true;
    } else {
        return false;
    }
}

// l'utente inserisce la sua parola e viene stampata se questa è palindoma o no
var parola_utente = prompt('inserisci una parola qualiasi')
if(parolaPalindroma(parola_utente)) {
    console.log('Hai inserito una parola palindroma!');
} else {
    console.log('Non hai inserito una parola palindroma');
}
