let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let new_gm_btn=document.querySelector("#new-game")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turnO=true//playerX,player Y

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const reset_game=()=>
{
    turnO=true
    enableBoxes()
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>
    {
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;

        checkWinner()
    });
});

const showWinner=(winner)=>
{
    msg.innerText="congratulations,winner is "+winner;
    msgContainer.classList.remove("hide");
}

const disableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true
    }
}

const enableBoxes=()=>
{

    for(let box of boxes)
    {
        box.disabled=false
        box.innerText=""
    }   
}
const checkWinner=()=>
{
    for(let pattern of winPatterns){
        let val1=boxes[pattern[0]].innerText
        let val2=boxes[pattern[1]].innerText
        let val3=boxes[pattern[2]].innerText
        if(val1!="" && val2!="" && val3!="")
        {
            if(val1==val2 && val2==val3)
            {
                console.log("winner",val1);
                showWinner(val1)
            }
        }
        
    }
    
}

new_gm_btn.addEventListener("click",reset_game);
reset.addEventListener("click",reset_game);
