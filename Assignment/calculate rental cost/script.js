const btn = document.getElementById("btn")
const output = document.getElementById("output")



btn.addEventListener("click",()=>{
    let car1 = `Economy` ;
    let car2 = `Midsize` ;
    let car3 = `Luxury` ;


    const days = document.getElementById("days").value
    const cartype = document.getElementById("car").value
    console.log("No. of Days : "+days)
    console.log("Car type : "+cartype)

    if (cartype==car1) {
        const total= days*4000;
        document.getElementById("output").innerHTML=  "Rs."+total
    } 
    else if(cartype==car2){
        const total= days*10000;
        document.getElementById("output").innerHTML=  "Rs."+total
       
    }else if(cartype==car3){
        const total= days*20000;
        document.getElementById("output").innerHTML=  "Rs."+total
        
    }else{
        document.getElementById("output").innerHTML= alert("Please enter valid car type."+" (Hint: 1st alphabet must be capital )")
    }
  
})

