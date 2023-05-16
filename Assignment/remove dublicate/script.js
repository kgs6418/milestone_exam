

const btn = document.getElementById("btn")


btn.addEventListener("click",()=>{
    // taking input from user and then seprating each elements using comma(,).
    const input = document.getElementById("input").value;
    var seprate = input.split(",")
    console.log('cart (at the time of input):',seprate)

    // removing dublicates using thr set() as it stores only unique values.
    const mySet = new Set(seprate);
    console.log('cart (after removing dublicates)',mySet)



})