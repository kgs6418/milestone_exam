var btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    let randomNum = Math.floor( Math.random()*16777215);
    let randomCode = "#"+ randomNum.toString(16);
    document.body.style.backgroundColor=randomCode;

})