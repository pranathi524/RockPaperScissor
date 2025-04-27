let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let usercorepara=document.querySelector("#user-score");
let compcorepara=document.querySelector("#comp-score");

const gencompChoice =()=>{
    const options=["rock","paper","scissor"];
    let idx=Math.floor(Math.random() * 3);
    return options[idx];
}

const drawgame = () =>{
    console.log("game draw");
    msg.innerText="Game was Draw! Play Again";
    msg.style.backgroundColor = "blue";
}

const showwinner =(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("you win");
        userscore++;
        usercorepara.innerText =userscore;
        msg.innerText=`You Win!. Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("you lose");
        compscore++;
        compcorepara.innerText =compscore;
        msg.innerText = `You Lose !. ${compchoice} beats  Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame =(userchoice)=>{
    console.log("user choice",userchoice);
    //generate computer choice
    const compchoice=gencompChoice();
    console.log("comp choice",compchoice);
    if(userchoice==compchoice){
        //draw
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            //scissor,paper
            userwin = compchoice === "paper" ? false :true;
        }
        else if(userchoice == "paper"){
            //rock,sciccors
            userwin = compchoice =="scissor" ? false :true;
        }
        else{
            //rock,paper
            userwin= compchoice=="rock" ? false :true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
       const userchoice=choice.getAttribute("id");
       playGame(userchoice);
    })
})