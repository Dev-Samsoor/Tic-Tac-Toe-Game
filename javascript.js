let body = document.querySelector("body");
let boxes = document.querySelectorAll(".box");
let resetBTn = document.querySelector(".reset");
let newGame = document.querySelector(".n-g");
let msgContiner = document.querySelector(".msg-continer");
let msg = document.querySelector("#msg");
let continer = document.querySelector(".continer");




let turnO = true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

 boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("box clicked");

        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
            
        }
             box.disabled = true;

            checkWinner();
    })
 })
    

 const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
    

    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("Winner", pos1);
                showWinnwer(pos1);
        }
    }
 }
}

const showWinnwer = (winner) => {
    msgContiner.classList.remove("hide");
    msg.innerText =    `Congratulations, the winner is ${winner}`
    continer.style.display = "none";
    disabledBoxes();
} 


const disabledBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const reseBatton = () => {
    enabledBoxes();
    msgContiner.classList.add("hide");
}

resetBTn.addEventListener("click", reseBatton);
newGame.addEventListener("click", () => {
    reseBatton();
    continer.style.display = "block";
});