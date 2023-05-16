var email = document.getElementById("email")
var password = document.getElementById("password")
var btn = document.getElementById("btn")

btn.addEventListener("click",(e)=>{
    
    if (email.value.match((/[@]/g))) {

        if (password.value.length >=8 ) {
                    document.getElementById("para2").innerHTML="valid email or password!"
                   
                }else{
                    e.preventDefault()
                    document.getElementById("para1").innerHTML="invalid email or password!"
                }
    }else{
        e.preventDefault()
        document.getElementById("para1").innerHTML="invalid email or password!"
       
        
    }
})
