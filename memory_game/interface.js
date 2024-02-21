const CARD = "card"
const FRONT = "card_front"
const BACK = "card_back"
const ICON = "icon"

let languages = [
    'bootstrap', 
    'css', 
    'electron', 
    'firebase', 
    'html', 
    'javascript', 
    'jquery', 
    'mongo', 
    'node', 
    'react', 
]

let cards = null

startGame()

function startGame(){
    let cards = createCardsFromTechs(languages)
    shuffledCards(cards)
    createCardsForTheBoard(cards)
}


//takes the "languages array" and transforms the elements into a new "cards array"
function createCardsFromTechs(languages){
    let cards = []

    languages.forEach(lang => {
        cards.push(createDuplicateOfCard(lang))
    })

    return cards.flatMap(pair => pair)
}

function createDuplicateOfCard(lang){
    return [{
        id: createRandomNumber(lang),
        icon: lang,
        flipped: false
    },{
        id: createRandomNumber(lang),
        icon: lang,
        flipped: false
    }]
}

function createRandomNumber(lang){
    return lang + "_" + parseInt(Math.random() * 1000)
}


function shuffledCards(cards){
    let currentIndex = cards.length //20
    let randomIndex = 0
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
 
        currentIndex--

        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]]
    }
}

// HTML da classe "card"
function createCardsForTheBoard(cards){
    let board = document.getElementById("gameBoard")

    cards.forEach(card => {

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
        cardElements.iinerHTML = "?"
    }
    htmlCard.appendChild(cardElements)

}

// when clicked, reveals the 'FRONT'
function flipCard(){
    this.classList.add('flip')
}