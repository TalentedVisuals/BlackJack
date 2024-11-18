let cards = [];
let player = {name: "Talented", points: 246}
let sum = 0;
let hasblackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.points;

function getRandomCard(){
    let randomCard =  Math.floor(Math.random() * 13) + 1

    if  (randomCard > 10){
        return  10}

    else if (randomCard === 1) {
        return 11
    }

    else   {
        return  randomCard
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    sumEl.textContent = "Sum:";
    
    sumEl.textContent += sum;
    cardsEl.textContent = "Cards:"
    // cardsEl.textContent += cards[0] + " " + cards[1]
    for  (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Need a card?"
    }
    else if (sum === 21) {
        message = "Jackpot!"
        hasblackjack = true
    }
    else if (sum > 21) {
        message = "Try again, you lost"
        isAlive = false
    }
    messageEl.textContent = message

}
function newCard() {
    if (isAlive === true && hasblackjack === false) {
        let thirdcard = getRandomCard()
    sum += thirdcard
    cards.push(thirdcard)

    renderGame()
    }
    
    
    

}
