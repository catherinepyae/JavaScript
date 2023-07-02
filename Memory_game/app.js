const card_array= [
    {
        name : 'cheeseburger',
        image : 'imgs/cheeseburger.png'
    },
    {
        name : 'fries',
        image : 'imgs/fries.png'
    },
    {
        name : 'hotdog',
        image :'imgs/hotdog.png'
    },
    {
        name : 'ice-cream',
        image : 'imgs/ice-cream.png'
    },
    {
        name : 'milkshake',
        image : 'imgs/milkshake.png'
    },
    {
        name : 'pizza',
        image : 'imgs/pizza.png'
    },
        {
        name : 'cheeseburger',
        image : 'imgs/cheeseburger.png'
    },
    {
        name : 'fries',
        image : 'imgs/fries.png'
    },
    {
        name : 'hotdog',
        image :'imgs/hotdog.png'
    },
    {
        name : 'ice-cream',
        image : 'imgs/ice-cream.png'
    },
    {
        name : 'milkshake',
        image : 'imgs/milkshake.png'
    },
    {
        name : 'pizza',
        image : 'imgs/pizza.png'
    },
]
const cards_chosen = [];
const cards_chosen_id = [];

card_array.sort(()=> 0.5 - Math.random());//make cards shuffle

const grid = document.querySelector('#grid');

function board_creator(){
    for(let i = 0; i < card_array.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','imgs/blank.png');
        card.setAttribute('data_id',i);
        card.addEventListener('click',cardFlip);
        grid.append(card);
    }
}
board_creator();

function checkmath(){
    console.log("check for match!");
    const cards = document.querySelectorAll('img');
    console.log(cards);
    if(cards_chosen[0] === cards_chosen[1]){
        alert("It's a match!");
        cards[cards_chosen_id[0]].setAttribute('src','imgs/white.png');
        cards[cards_chosen_id[1]].setAttribute('src','imgs/white.png');
    }
}
function cardFlip(){
    const card_id = this.getAttribute('data_id');
    //console.log("clicked!" , card_id);
    cards_chosen.push(card_array[card_id].name);
    cards_chosen_id.push(card_id);
    //console.log(cards_chosen);
    //console.log(cards_chosen_id);
    //console.log(cards_chosen);
    this.setAttribute('src',card_array[card_id].image);
    if(cards_chosen.length === 2){
        setTimeout(checkmath,500);
    }
}
