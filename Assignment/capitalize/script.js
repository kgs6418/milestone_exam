const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    
     const regexp = /^[a-z]/;
    (regexp.test(fname.value))? myfunction1():console.log(fname.value);
    
     const regexp2 = /^[a-z]/;
     (regexp2.test(lname.value))? myfunction2():console.log(lname.value);
    
    })


    function myfunction1() {
        const slice1 = fname.value.charAt(0).toUpperCase() + fname.value.slice(1);
    console.log(slice1);
    }


    function myfunction2() {
        const slice2 = lname.value.charAt(0).toUpperCase() + lname.value.slice(1);
    console.log(slice2);
    }



