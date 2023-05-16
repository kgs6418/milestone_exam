var input = document.getElementById("input")
var listcontainer = document.getElementById("listcontainer")
var btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    if(input.value=== ''){
        alert("you must write something!")
        }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listcontainer.appendChild(li)

        input.value = ' ';

        li.addEventListener("click",()=>{
        li.style.textDecoration = "line-through"; })

        li.addEventListener("dblclick",()=>{
           listcontainer.removeChild(li);})

}})

