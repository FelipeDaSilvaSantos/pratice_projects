let techs = [
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

CreateCardsFromTechs(techs)

function CreateCardsFromTechs(techs){
    let cards = []

    techs.forEach(card => {
        cards.push(createDuplicateOfCard(card))
    })

    console.log(cards)
}

function createDuplicateOfCard(card){
    return [{
        id: createRandomNumber(card),
        icon: card,
        flipped: false
    },{
        id: createRandomNumber(card),
        icon: card,
        flipped: false
    }]
}

function createRandomNumber(card){
    return card +"_" + parseInt(Math.random() * 1000)
}