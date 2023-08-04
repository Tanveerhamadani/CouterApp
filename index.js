
let count=document.getElementById("count");
let saveEl=document.getElementById("save-el");


function increment(){
    count.innerText=parseInt(count.innerText)+1;
   
}

function save(){
    // console.log(count.innerText)
    let countin=count.innerText + "-";
    if(count.innerText != 0)
    {
    saveEl.textContent+=countin;
    }
    count.innerText=0;
}