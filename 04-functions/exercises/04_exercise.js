/*

Card Game of War Exercise Part 1.

*/

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/*

Given the above suits and ranks array, write a function called
createDeck that will take both as parameters and return a new array
with all 52 possible card combinations. The returned 'Deck of Cards'
shoulkd be an array with 52 strings in it, each representing a card
(i.e. 'ace of Hearts')

Call createDeck and save the result into a variable called
deckOfCards.

*/
var deckOfCards = [];

function createDeck() {
  var deckCount = 0

  for (r=0; r < ranks.length; r++){
    for (s=0; s < suits.length; s++){
      //console.log(deckCount, "=", ranks[r], "of", suits[s]);

      /*deckOfCards[deckCount] = ranks[r] + " of " + suits[s];
      deckCount++;*/

      deckOfCards[deckOfCards.length] = ranks[r] + " of " + suits[s];
    };
  };

  // console.log('*** Deck of Cards ***');
  // for (d = 0; d< (ranks.length * suits.length); d++){
  //   console.log(deckOfCards[d]);
  // };

};

createDeck();

/*

Write a function called getRandomCard that will return one random
card from deckOfCards whenever it is called.

Don't worry about removing the card from deckOfCards.

*/
function getRandomCard() {
  var randomNum = Math.floor(Math.random() * (ranks.length * suits.length)  );
  var aCard = deckOfCards[randomNum];
  deckOfCards.splice(randomNum, 1); /* remove the card that has been dealt*/
   return aCard;
};

//console.log( getRandomCard() );

/*

Write a function called dealHand that takes a number as it's only
parameter. This number represents the number of cards that dealHand
should return.

If no number is passed in, then dealHand should still return one
card. If dealHand is only returning one card, it returns that card
as a string; if dealHand is returning more than one card, it returns
the cards as an array.

*/


function dealHand (numOfCards ){
  var myHand = [];
  var myCard

  if ( (numOfCards === undefined) || (numOfCards === 0) ) {
    var numOfCards = 1;
  } else if (numOfCards > (ranks.length * suits.length) ) {
    var numOfCards = (ranks.length * suits.length) ;
  };

  if (numOfCards > 1){
    for (c=0; c < numOfCards; c++){
        myCard = getRandomCard();
        while (myCard === undefined){ /*so you don't get an empty card*/
          myCard = getRandomCard();
          if (deckOfCards.length <= 0){ /* To Do: what if you run out of cards*/
              myCard = "No More Cards";
          };
        };
        myHand[c] = myCard;
    };
  } else {
    myHand = getRandomCard();
  };

  return myHand;

};

//console.log( dealHand(5) );

/*

Create two variables, playerOneCards and playerTwoCards, and
initialize them as empty arrays.

Deal both playerOneCards and playerTwoCards 7 cards each.

*/
var playerOneCards = [];
var playerTwoCards = [];

playerOneCards = dealHand(7);
playerTwoCards = dealHand(7);

// console.log(playerOneCards);
// console.log(playerTwoCards);

/*

Write a function called showHand that takes a player's cards as an
array and prints each card.

*/

function showHand( aHand) {
  console.log("\n *** Show Hand ***");
  for (a=0; a< aHand.length; a++){
    console.log(aHand[a]);
  };

};

showHand(playerOneCards);
showHand(playerTwoCards);

/*

Get pumped:
Next class we're going to talk about objects, which will let us
create cards that are easier to use because they contain attributes
like suit and rank. Then, we'll be able to take two random cards and
compare their score with each other!

*/
