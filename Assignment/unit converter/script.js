const input = document.getElementById("input");
const btn = document.getElementById("btn");


btn.addEventListener("click",()=>{
    let f= ((input.value*9)/5)+32;
    document.getElementById("output").innerHTML = f+"°F";
})