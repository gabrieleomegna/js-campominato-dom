// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.


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
    
    btnPlayElement.addEventListener('click', 
    function () {
        generateNewGame(mainContentElement);
    })
    
    
    
    
    
    function generateNewGame (wrapperElement) {
        wrapperElement.innerHTML = ''
        for (let i = 1; i <= 100; i++) {
            const squareItem = squareGenerator();
            wrapperElement.appendChild(squareItem);
            
            const squareContent = document.createElement('span');
            const numberInsideSquare = squareItem.append(squareContent);
            squareContent.innerText = getRandomNumber(1,100);
            squareContent.classList.add('display-none')
    
            squareItem.addEventListener('click', 
            function() {
                squareItem.classList.toggle('bg-lightblue');
                squareContent.classList.toggle('display-none');
                console.log(squareContent.innerHTML);
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