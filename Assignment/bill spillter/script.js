const btn = document.getElementById("btn")
const people = document.getElementById("people")
  

btn.addEventListener("click",()=>{
    const price1 = document.getElementById("price1").value
    const price2 = document.getElementById("price2").value
    const price3 = document.getElementById("price3").value
    const price4 = document.getElementById("price4").value
    
    const totalBill = parseInt(price1) + parseInt(price2) + parseInt(price3) + parseInt(price4)
    document.getElementById("output").innerHTML =(totalBill)

    var split = totalBill/people.value
    document.getElementById("perhead").innerHTML =(split)

    var object = {}
    object.total_bill = totalBill
    object.bill_share = split
    console.log(object)

    
})