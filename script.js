let box = document.querySelectorAll(".box");
let restbtn = document.querySelector("#newbtn")
let msgContainer = document.querySelector(".msg-container")
let btn = document.querySelector("#btn");
let msg = document.querySelector("#msg");


let turnO = true;
let count = 0;
let winnerFound = false;


let winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

box.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            box.classList.add("o");
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.classList.add("x");

            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    })

});


const resetGame = () => {
    turnO = true;
    count = 0;
    winnerFound = false;
    enableBoxes();
    msgContainer.classList.add("hide");


}

const disableBoxes = () => {
    for (let boxes of box) {
        boxes.disabled = true;

    }
}

const enableBoxes = () => {
    for (let boxes of box) {
        boxes.disabled = false;
        boxes.innerText = "";

    }
}


const showWinner = (winner) => {
    winnerFound = true;
    msg.innerText = `Congratulation, ${winner} is Win 🎉`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

let showDraw = () => {
    msg.innerText = "Match is Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winning) {


        let pos1val = box[pattern[0]].innerText
        let pos2val = box[pattern[1]].innerText
        let pos3val = box[pattern[2]].innerText

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {


                showWinner(pos1val);
                return;
            }
        }


    }
    if (count === 9 && !winnerFound) {

        showDraw();

    }
};






btn.addEventListener("click", resetGame);
restbtn.addEventListener("click", resetGame);







