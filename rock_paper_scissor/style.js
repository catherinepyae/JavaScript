const computer_choice_display = document.getElementById("computer_choice");
const user_choice_display = document.getElementById("user_choice");
const result_display = document.getElementById("result");
let user_choice;
let computer_choice;
let result_output;

let possible_choice = document.querySelectorAll("button");

possible_choice.forEach( possible_choice => possible_choice.addEventListener("click" , (e) => {
    user_choice = e.target.id;
    user_choice_display.innerHTML = user_choice;
    computerGenerator();
    result();
}))
function computerGenerator(){
    computer_choice = Math.floor(Math.random()*possible_choice.length+1);
    if(computer_choice === 1){
        computer_choice = "rock";
    }
    if(computer_choice === 2){
        computer_choice = "paper";
    }
    if(computer_choice === 3){
        computer_choice = "scissor";
    }
    computer_choice_display.innerHTML = computer_choice;
}
function result(){
    if(user_choice === computer_choice){
         result_display.innerHTML = "It's a draw!"
    }
    if(user_choice === "rock" && computer_choice === "paper"){
        result_display.innerHTML = "You Win"
    }
    if(user_choice === "rock" && computer_choice === "scissor"){
        result_display.innerHTML = "You Lost"
    }
    if(user_choice === "Paper" && computer_choice === "rock"){
        result_display.innerHTML = "You Lost"
    }
    if(user_choice === "paper" && computer_choice === "scissor"){
        result_display.innerHTML = "You Win"
    }
    if(user_choice === "scissor" && computer_choice === "rock"){
        result_display.innerHTML = "You Win"
    }
    if(user_choice === "scissor" && computer_choice === "paper"){
        result_display.innerHTML = "You Lost"
    }
}