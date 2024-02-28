let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let container = document.querySelector('.container');
let head = document.querySelector('#h1');





let turnO = true  // playerX,playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
    container.classList.remove('hide');
    head.classList.remove('hide');
    resetBtn.classList.remove('hide');
    


}




boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{

        if(turnO){
            box.innerText = 'Y';

            turnO = false;
        }else{
            box.innerText = 'X';
            turnO = true;
        }
        // line.style.display = 'block';

    box.disabled = true;
     
    checkWinner();
    })

});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = '';
    }
};


const showWinner = (winner) =>{

    setTimeout( ()=>{
        msg.innerHTML = `Congratulation, Winner is: ${winner}`;
        msgContainer.classList.remove('hide');
        container.classList.add('hide');
        head.classList.add('hide');
        resetBtn.classList.add('hide');

    },2000)
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
       

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){

                showWinner(pos1Val);
            }
        }

    //    console.log(pos1Val[0][1][2]);
    }
};


   


newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);


