const number = document.getElementById("number");
const btn = document.getElementById("btn");


btn.addEventListener("click",()=>{
    var length =number.value;
    document.write("Entered number is: "+length+"<br /><br /><br />")
    document.write("Inverted right-angle pattern."+" <br/><br/>")
    for (let i = length; i >= 1; i--) 
    {
        for (let j = 1; j <= i; j++)
            {
                document.writeln("*");
            }
        document.write("<br />");
    }
    
})
