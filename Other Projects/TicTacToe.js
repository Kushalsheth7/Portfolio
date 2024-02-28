let boxes = document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset")
let newGamebtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turno=true

const wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8]]

const restgame=()=>{
    turno=true
    enableBoxes()
    msgContainer.classList.add("hide")
  }
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false
    box.innerText=""
  }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
      console.log("Box was clicked");
      if(turno===true){
        box.style.color="blue"
        box.innerText="O"
        turno=false
      }
      else{
        box.style.color="red"
        box.innerText="X"
        turno=true
      }
      box.disabled=true
      checkwinner()
    });
  });
  const checkwinner=()=>{
    for(let pattern of wins){
      pos1 = boxes[pattern[0]].innerText
      pos2 = boxes[pattern[1]].innerText
      pos3 = boxes[pattern[2]].innerText
      if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos2==pos3){
          console.log("Winner",pos1)
          showwinner(pos1)
        }
      }
    }
  }

  const disableBoxes=()=>{
    for(let box of boxes){
      box.disabled=true
    }
  }
  const showwinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
  }

  newGamebtn.addEventListener("click",restgame);
  resetbtn.addEventListener("click",restgame)