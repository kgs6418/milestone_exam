
var password = document.getElementById("password");
var btn = document.getElementById("btn");
var lower = document.getElementById("lower")
var upper = document.getElementById("upper")
var special = document.getElementById("special")
var number = document.getElementById("number")
var max = document.getElementById("max")
var min= document.getElementById("min")


//  Validate lowercase letters

btn.addEventListener("click",()=>{
    if (password.value.match((/[a-z]/g))) {
        console.log()
    }else{
            alert("lower case missing !")
            
        }
       
})
//  Validate upper letters
btn.addEventListener("click",()=>{
    if (password.value.match((/[A-Z]/g))) {
        console.log()
    }else{
        alert("upper case missing !")
        
        
    }
})
//  Validate numbers
btn.addEventListener("click",()=>{
    if (password.value.match((/[0-9]/g))) {
        console.log()
    }else{
        alert("number  missing !")
       
    }
})
//  Validate special character
btn.addEventListener("click",()=>{
    if (password.value.match((/[!@#$%^&*]/g))) {
        console.log()
    }else{
        alert("special character missing !")
        
    }
})
//  Validate password length
btn.addEventListener("click",()=>{
    if (password.value.length >=5 & password.value.length <=8) {
        console.log()
    }else{
        alert("password length must be >= than 5 and <=8  !")
       
    }
})

// passwword validation
btn.addEventListener("click",()=>{
    var pd =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,8}$/;
    if(password.value.match(pd)){
        console.log("password matched. password validation successful")
    }else{
        console.log("password didn't matched. password validation unsuccessful")
    }
})