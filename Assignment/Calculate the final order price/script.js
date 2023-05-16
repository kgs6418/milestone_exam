const btn = document.getElementById("btn")
const price1 = document.getElementById("price1")
const quantity1 = document.getElementById("quantity1")
const price2 = document.getElementById("price2")
const quantity2 = document.getElementById("quantity2")
const price3= document.getElementById("price3")
const quantity3 = document.getElementById("quantity3")

btn.addEventListener("click",()=>{
    var p1 =price1.value
    var q1 =quantity1.value
    var p2 =price2.value
    var q2 =quantity2.value
    var p3=price3.value
    var q3 =quantity3.value
    // console.log(p,q)

    let cart = [
        {
            price:p1,
            quantity:q1
        },
        {
            price:p2,
            quantity:q2
        },
        {
            price:p3,
            quantity:q3
        }
    ]
    console.log(cart)

for (let i = 0; i < cart.length; i++) {
    
    console.log("Total of cart at "+ [[i]]+": Rs."+cart[i].price *cart[i].quantity )
}})