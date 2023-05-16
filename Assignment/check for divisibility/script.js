const btn = document.getElementById("btn");
var number = document.getElementById("number");

btn.addEventListener("click",()=>{
    // the number input will convert in a string of array.
    const array = number.value
    console.log(array)
    const arr =[]
    arr.push(array)
    console.log(arr)
    
    
   

    // each character will get converted into number array using the mapping fun.
 const digits = Array.from(String(array), Number);
 console.log(digits);

   
 for (let i = 0; i < digits.length; i++) {
     if (digits[i]%3==0 && digits[i]%2==1) {
         console.log(digits[i])
     }
     
 }
    
})

 
