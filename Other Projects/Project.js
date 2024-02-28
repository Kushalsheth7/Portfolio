// // API
// const url="https://cat-fact.herokuapp.com/facts"
// let factPara = document.querySelector("#fact")
// const btn = document.querySelector("#btn")

// const getFacts= async()=>{
//     let response= await fetch(url)
//     console.log(response)
//     let data = await response.json()
//     // console.log(data[0].text)
//     // factPara.innerText = data[0].text
//     factPara.innerText = data[1].text
// }
// btn.addEventListener("click",getFacts)
// // AJAX is Aysnchronous JS & XML
// // JSON is JAvascript Object NOtation 
// // json() method : returns a second promise that resolves with the result of parsing the response body text as json (input is json and output is js object)

const baseurl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const dropdown=document.querySelectorAll(".dropdown select")
const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")
let btn=document.querySelector("form button")
const msg= document.querySelector(".msg")


for(let select of dropdown){
    for(Currcode in countryList){
        let newOption = document.createElement("option")
        newOption.innerText=Currcode
        newOption.value=Currcode
        if(select.name==="from" && Currcode==="USD"){
            newOption.selected="selected"
        }
        else if(select.name==="to" && Currcode==="INR"){
            newOption.selected="selected"
        }
      
       
        select.append(newOption)
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target)
    })
}


const updateFlag=(element)=>{
    let Currcode=element.value
    let countryCode=countryList[Currcode]
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img=element.parentElement.querySelector("img")
    img.src=newSrc
}

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault()
    let amt=document.querySelector(".amount input")
    let amtVal=amt.value
    if (amtVal==="" || amtVal<1){
        amtVal=1
        amt.value="1"
    }
    const url=`${baseurl}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let response= await fetch(url)
    let data = await response.json()
    console.log(data)
    let rate= data[toCurr.value.toLowerCase()]
    console.log(rate)
    let finalAMount=amtVal*rate
    msg.innerText=`${amtVal} ${fromCurr.value}=${finalAMount} ${toCurr.value}`
})