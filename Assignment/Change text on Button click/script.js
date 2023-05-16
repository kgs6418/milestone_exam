var btn = document .getElementById("btn")
var head1 = document.getElementById("head1")

btn.addEventListener("click",()=>{
    if (head1.innerHTML=="The most affordable learning plateform") {
        head1.innerHTML= "PW Skills"
    }else{
        head1.innerHTML= "The most affordable learning plateform"
    }

    
   
})