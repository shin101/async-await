// Part 1: Number Facts

// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

// let faveNum = 7;
// let link = `http://numbersapi.com/${faveNum}?json`;

// async function numberFacts(){
//     let fact = await $.getJSON(link);
//     console.log(fact);
// }

// numberFacts();

// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

// faveNums = [1,2,3,4];
// let link = `http://numbersapi.com/${faveNums}?json`

// async function numberFacts(){
//     let facts = await $.getJSON(link);
//     console.log(facts);
// }

// numberFacts();


// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

// (Note: You’ll need to make multiple requests for this.)
// let faveNum =7;
// let link = `http://numbersapi.com/${faveNum}?json`;

// async function numberFacts(){
//     let fact = await Promise.all([$.getJSON(link),$.getJSON(link),$.getJSON(link),$.getJSON(link)]);
//     fact.forEach(data=>console.log(data))
// }

// numberFacts();

// ******************************************************************************************************

// Part 2: Deck of Cards

// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

// let deck = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
// async function drawCard(){
//     let card = await $.getJSON(deck);
//     console.log(card.cards[0].suit, card.cards[0].value);
// }

// drawCard();

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

// Once you have both cards, console.log the values and suits of both cards.

// let deck = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
// async function drawCards(){
//     let cards = await Promise.all([$.getJSON(deck),$.getJSON(deck)]);
//     cards.forEach(data=>console.log(data.cards[0].suit,data.cards[0].value));
// };

// drawCards();



// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

let deckId;
let deck = "http://deckofcardsapi.com/api/deck/new/shuffle/";
let card='';

async function drawCards(){
    let res = await $.getJSON(deck);
    deckId = res.deck_id;

    $('button').on('click',async function(){
        let data = await $.getJSON(`http://deckofcardsapi.com/api/deck/${deckId}/draw`);
        card=data.cards[0].suit +' '+ data.cards[0].value;
        cardImage = data.cards[0].image 

        if(card){$('.drawn-cards').append(`<img src='${cardImage}' width=50 height=50>`)
        }

        if(data.remaining==0){
            $('button').remove();
        }
    });

};

drawCards();