let count=0;
let sV=document.getElementById("sa");

let countL=document.getElementById("countL")

function increment()
{
    count =count +1
    countL.innerText= count
    console.log(countL)
    console.log(count)
}

function save ()
{
    sV.innerText= sV.innerText  +count+"-"
    countL.innerText=0
    count=0
    console.log(sV)
    console.log(count)
}
