const btn = document.getElementById("btn")


btn.addEventListener("click",()=>{
    const input = document.getElementById("input").value;
    var arr = input.split(",")
    console.log('cart (at the time of input):',arr)

    // Items with their quantity in object
    var count={}
    for (let i = 0; i < arr.length; i++) {
        var element = arr[i];
        // console.log(element)
        count[element] = count[element]? count[element]+1:1;
        }
    console.log(count)

    // converting object into nested array.
    const entries = Object.entries(count)
    console.log(entries)

    Object.entries(count).forEach(([key, value]) => {
        console.log(`${key}: ${value*2}`)
    

    
})})
