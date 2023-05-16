// creating object with name and account balance:
let userDetail = {name: "Kumar Gaurav Singh",accountBalance: 100};
document.getElementById("name").innerText ="Name:  "+ userDetail.name;
document.getElementById("balance").innerText ="Account Balance: Rs.  "+ userDetail.accountBalance;

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

// adding event listener for deposit with btn1:
btn1.addEventListener("click", ()=>{
    const deposit = document.getElementById("deposit").value
    let total = (userDetail.accountBalance) + parseInt(deposit)
    document.getElementById("balance").innerText ="Account Balance: Rs.  "+ total;
    userDetail.accountBalance = total
    console.log(userDetail)
    
})
// adding event listener for widthdrawal with btn2:
btn2.addEventListener("click", ()=>{
    const withdrawal = document.getElementById("withdrawal").value
    let total = parseInt(userDetail.accountBalance) - parseInt(withdrawal)
    document.getElementById("balance").innerText ="Account Balance: Rs.  "+ total;
    userDetail.accountBalance = total
    console.log(userDetail)
})


