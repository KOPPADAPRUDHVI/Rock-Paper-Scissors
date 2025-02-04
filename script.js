let choices = document.querySelectorAll(".choice");
let userscore=document.querySelector("#you");
let compscore=document.querySelector("#comp");
let msg = document.querySelector("#msg");
let user_score=0
let compu_score=0
const compuchoice= ()=>{
    const options =["rock","paper","scissors"];
    const randomchoice=Math.floor(Math.random()*3);
    return options[randomchoice];
}

const playgame = (userchoice) =>{
    let useranswer=true;
    const computerchoice= compuchoice();
    if (userchoice === computerchoice){
        msg.innerText="Game Was Draw Try Again !";
        msg.style.backgroundColor="#BDD5E7";
        return;
    }
    else{
        if (userchoice=== "rock"){
            useranswer = computerchoice === "paper" ? false : true;
        }
        else if (userchoice=== "paper"){
            useranswer = computerchoice === "scissors" ? false : true;
        }
        else{
            useranswer = computerchoice === "rock" ? false : true;
        }
    }
    if (useranswer){
        user_score++;
        userscore.innerText=user_score;
        msg.innerText=`U win!, ${userchoice} beats ${computerchoice} `;
        msg.style.backgroundColor="#52A447";
    }
    else{
        compu_score++;
        compscore.innerText=compu_score;
        msg.innerText=`U Lost!, ${userchoice} beats ${computerchoice} `;
        msg.style.backgroundColor="#ff4f4b";
    }
    if (user_score > compu_score){
        userscore.style.color="#59E659";
        compscore.style.color="#FF3131";
    }
    else{
        userscore.style.color="#FF3131";
        compscore.style.color="#59E659";
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    }) 
});