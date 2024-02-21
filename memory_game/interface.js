const CARD = "card"
const FRONT = "card_front"
const BACK = "card_back"
const ICON = "icon"

startGame()

function startGame(){
    createCardsForTheBoard(game.createCardsFromTechs())
}

// HTML da classe "card"
function createCardsForTheBoard(){
    let board = document.getElementById("gameBoard")

    game.cards.forEach(card => {

        let htmlCard = document.createElement("div")
        htmlCard.id = card.id
        htmlCard.classList.add(CARD)
        htmlCard.dataset.icon = card.icon
        
        createCardElement(card, htmlCard)

        htmlCard.addEventListener('click', flipCard)
        board.appendChild(htmlCard)

    })
}


function createCardElement(card, htmlCard){
    createCardFace(FRONT, card, htmlCard)
    createCardFace(BACK, card, htmlCard)
}

// the card receives both(front, back) but the css covers the front
function createCardFace(face, card, htmlCard){
    let cardElements = document.createElement("div")
    cardElements.classList.add(face)
    if(face === FRONT){
        let cardFace = document.createElement("img")
        cardFace.classList.add(ICON)
        cardFace.src = "images_game/" + card.icon + ".png"
        cardElements.appendChild(cardFace)
        
    }else if(face === BACK){
        cardElements.innerHTML = "&lt/&gt"
    }else{
        cardElements.iinerHTML = "#ERROR#"
    }
    htmlCard.appendChild(cardElements)

}

// when clicked, reveals the 'FRONT'
function flipCard(){
    this.classList.add('flip')
}