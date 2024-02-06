let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgamebtn = document.querySelector(".new-game");
let mescont = document.querySelector(".mis-container");
let mes = document.querySelector(".mis");
let winningpat = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let turnx = true;


const disabledbox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enablebox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
newgamebtn.addEventListener("click",() => {
  turnx = true;
  enablebox();
  mescont.classList.add("hide");
});
resetbtn.addEventListener("click",() => {
  turnx = true;
  enablebox();
  mescont.classList.add("hide");
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    //console.log("box was clicked");
    if (turnx) {
      box.innerText = "X";
      turnx = false;
    } else {
      box.innerText = "O";
      turnx = true;
    }
    box.disabled = true;
    checkwin();
  });
});
const checkwin = () => {
  for (let pattern of winningpat) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      winner(val1);
    }
  }
};



const winner = (win) => {
  mes.innerHTML = `The Winner is ${win}`;
  mescont.classList.remove("hide");
  disabledbox();
};
