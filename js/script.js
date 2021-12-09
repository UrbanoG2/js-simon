// Descrizione:
// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
//  Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


//creo 5 numeri casuali



let numbers = [];
let userNumbers = [];
let title = document.getElementById("content");




for (let i = 0; i < 5; i++) {

    let randNumber = Math.floor((Math.random() * 10) + 1);
    console.log(randNumber);
    
    numbers.push(randNumber)

    // sparo i numeri nel dom

    let title = document.getElementById("content");
    title.innerHTML += (numbers[i]) + "  " ;

    
}

console.log(numbers);


//li faccio sparire 

setTimeout (hideNumbers, 4000);

function hideNumbers () {
    title.classList.add("display_none");
}




//chiedo all'utente di inserire 5 numeri

setTimeout (promptFunction, 30000);

function promptFunction() {

for (i = 0; i < 5; i++) {

    let userNumber = parseInt(prompt ("Quali erano i numeri?"));

    userNumbers.push(userNumber);
    console.log("Numero scelto dall'utente " + userNumbers);  
    
    
}

console.log(userNumbers + " numeri scelti");

//confronto i numeri 



if (JSON.stringify(numbers) === JSON.stringify(userNumbers)) {

    let title = document.getElementById("content");
    title.innerHTML += " Complimenti, hai vinto!";
    title.classList.remove("display_none");
    
    console.log("Hai vinto");
    
} else {

    let title = document.getElementById("content");
    title.innerHTML += " Peccato, hai perso ☹";
    title.classList.remove("display_none");
    console.log("Hai perso");

}


}






