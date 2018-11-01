const SUITE = ['HEART', 'DIAMOND', 'CLUB', 'SPADE']
const FACE = ['A', 'K', 'Q', 'J', '2', '3', '4', '5', '6', '7', '8', '9', '10']

class Card {
  constructor (face, suite) {
    this.face = face
    this.suite = suite
  }
}

class Deck {
  constructor () {
    this.cards = []

    for (let i = 0; i < FACE.length; i++) {
      for (let j = 0; j < SUITE.length; j++) {
        this.cards.push(new Card(FACE[i], SUITE[j]))
      }
    }
  }

  swap (i, j) {
    const temp = this.cards[i]
    this.cards[i] = this.cards[j]
    this.cards[j] = temp
  }

  shuffle () {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * i)

      this.swap(random, i)
    }
  }
}

const deck = new Deck()

console.log(deck.shuffle())
console.log(deck.cards)
