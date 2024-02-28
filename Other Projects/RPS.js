let user = 0
let comp = 0

const choices=document.querySelectorAll(".choice")
const msg =document.querySelector("#msg")
const userScore = document.querySelector("#user-score")
const CompScore = document.querySelector("#comp-score")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let chid = choice.querySelector("img").getAttribute("id");
        PlayGame(chid)
    })
})

const generate=()=>{
    let opt=["Rock","Paper","Scissors"]
    const ri=Math.floor(Math.random()*3)
    return opt[ri]
}

const draw=()=>{
    console.log("Game was draw")
    msg.innerText=`Game Was Draw!!`
    msg.style.backgroundColor="black"
    // document.querySelector("body").style.backgroundColor="white"
}

const showwinner=(userwin,chid,compchoice)=>{
    if(userwin){
        user++
        userScore.innerText=user
        console.log("You win")
        msg.innerText=`You Win!! ${chid} beats ${compchoice}`
        msg.style.backgroundColor="green"
        // document.querySelector("body").style.backgroundColor="green"
    }
    else{
        comp++
        CompScore.innerText=comp
        console.log("You lose")
        msg.innerText=`You Lose!! ${compchoice} beats ${chid}`
        msg.style.backgroundColor="red"
        // document.querySelector("body").style.backgroundColor="red"
    }
}

const PlayGame=(chid)=>{
    console.log("User Choice",chid)
    const compchoice=generate()
    console.log("Comp Choice",compchoice)
    if(chid==compchoice){
        draw()
    }
    else{
        let userwin=true
        if(chid=='Rock'){
           userwin= compchoice=="Paper" ?false : true;
        }
        else if(chid=='Paper'){
            userwin= compchoice=="Scissors" ?false : true; 
        }
        else{
            userwin= compchoice=="Rock" ?false : true; 
        }
        showwinner(userwin,chid,compchoice)
    }
}