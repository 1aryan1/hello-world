let firstCard= randomNum()
let secondCard= randomNum()
let isAlive= false
let blackJack= false


console.log(firstCard)
console.log(secondCard)
let card= [firstCard , secondCard]
let cardEl=document.querySelector("#card-el")
let sum= 0;

let msg=document.querySelector("#message-el")

let sumEl=document.querySelector("#sum-el")

function renderGame(){

    isAlive= true
    sum =0
    for (let i = 0 ; i < card.length ; i++ )
    {
        sum = sum + card[i]
        sumEl.textContent = sum
    }

    sumEl.textContent = "SUM :  " + sumEl.textContent

    cardEl.textContent = "CARDS :"
    for (let i = 0 ; i < card.length ; i++ )
    {
        cardEl.textContent = cardEl.textContent + " " + card[i]
    }

    if(sum<21)
    {
        msg.textContent= "DO YOU WANT TO DRAW A NEW CARD ?"
    }
    else if(sum==21){
        msg.textContent= "WOW YOU GOT A BLACK JACK !!!"
        blackJack= true
        isAlive= false
        
    }
    else {
        isAlive =false
        msg.textContent= "YOU ARE OUT OF THE GAME"
    }


}

function randomNum(){
    let randomnum= Math.floor(Math.random() * 12) +1
    return randomnum
}

let j=2
function drawCard(){
    
    if( isAlive ){

    
        newcard= randomNum()

        card[j]=  newcard
        

        renderGame()
    }
    j++
}