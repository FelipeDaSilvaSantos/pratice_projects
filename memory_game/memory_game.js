const game = {

    languages:  [
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
    ],

    cards: null,

    //takes the "languages array" and transforms the elements into a new "cards array"
    createCardsFromTechs: function (){
    this.cards = []

    this.languages.forEach(lang => {
        this.cards.push(this.createDuplicateOfCard(lang))
    })

    this.cards = this.cards.flatMap(pair => pair)
    cards = this.shuffledCards()
    return this.cards
    },

    createDuplicateOfCard: function (lang){
        return [{
            id: this.createRandomNumber(lang),
            icon: lang,
            flipped: false
        },{
            id: this.createRandomNumber(lang),
            icon: lang,
            flipped: false
        }]
    },

    createRandomNumber: function (lang){
        return lang + "_" + parseInt(Math.random() * 1000)
    },

    shuffledCards: function (){
        let currentIndex = this.cards.length //20
        let randomIndex = 0
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
     
            currentIndex--
    
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]]
        }
    },



    
}