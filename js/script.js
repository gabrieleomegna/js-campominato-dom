// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione:
// nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati:
// - abbiamo calpestato una bomba
// - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// btnPlayElement.addEventListener('click',
// function () {
    //     gridGenerator (100, wrapperElement);
    // })
    
    
function gridGenerator(numberOfSquares, parent) {
    for (let i = 0; i < numberOfSquares; i++) {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square-item');
        parent.appendChild(squareElement);
    }
}
    
    
// ! Aggiungo un EventListener al bottone play
    // ! genero una griglia quadrata 10x10
    
    
    
// ! Aggiungo un event listener per ogni cella in cui:
    // ! la cella si colora di azzurro
    // ! emetto un messaggio in console in cui viene scritto il numero della cella corrispondente

const mainContentElement = document.querySelector('div.main-content');
const btnPlayElement = document.querySelector('button#play');
const selectorElement = document.querySelector('select#select-difficulty');

btnPlayElement.addEventListener('click', 
function () {
    switch (parseInt(selectorElement.value)) {
        case 0:
        default:
            generateNewGame(mainContentElement, 100);
            break
        case 1:
            generateNewGame(mainContentElement, 81);
            break
        case 2:
            generateNewGame(mainContentElement, 49);
    }


})







function generateNewGame (wrapperElement, numberOfsquares) {
    wrapperElement.innerHTML = ''
    let mines = generateMines(16, 100);
    console.log(mines);
    for (let i = 1; i <= numberOfsquares; i++) {
        let squareItem = squareGenerator();
        wrapperElement.appendChild(squareItem);
        const cellsNo = Math.sqrt(numberOfsquares);
        squareItem.style.width = `calc(100% / ${cellsNo})`
        squareItem.style.height = `calc(100% / ${cellsNo})`
        
        const squareContent = document.createElement('span');
        squareItem.append(squareContent);
        squareContent.innerText = getRandomNumber(1,100);
        squareContent.classList.add('display-none')
        squareItem.addEventListener('click', 
        function() {
            if (mines.includes(squareContent.innerText)) {
                squareItem.classList.add('bg-red');
            } else {
                squareItem.classList.add('bg-lightblue');
                squareContent.classList.remove('display-none');
            }
        })
    }
}

function squareGenerator () {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square-item');
    
    return squareElement
}

function getRandomNumber (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function generateMines(mineNumber, numberOfRange) {
    let arrayNumeriGenerati = [];
    for (let i = 0; i < mineNumber; i++) {
        let randomNum = getRandomNumber(1,numberOfRange);
        while (arrayNumeriGenerati.includes(randomNum)) {
            randomNum = getRandomNumber(1, numberOfRange);
            
        }
        arrayNumeriGenerati.push(randomNum);
    }
    return arrayNumeriGenerati
}




// squareItem.addEventListener('click', 
// function() {
//     let mines = generateMines(16);
//     if (mines.includes(squareContent.innerHTML)) {
//         squareItem.classList.add('bg-red');
//     } else {
//         squareItem.classList.add('bg-lightblue');
//         squareContent.classList.remove('display-none');
//     }
// })