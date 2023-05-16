var mark1 = document.getElementById("mark1");
var mark2 = document.getElementById("mark2");
var mark3 = document.getElementById("mark3");
var mark4 = document.getElementById("mark4");
var mark5 = document.getElementById("mark5");
var btn = document.getElementById("btn");


btn.addEventListener("click", ()=>{

const stringmarks = [mark1.value, mark2.value, mark3.value,mark4.value,mark5.value]
let length = stringmarks.length
console.log(stringmarks)

// converting stringsmarks into numbermarks 
const numbermarks = []
for (let i = 0; i < length; i++) 
numbermarks.push(parseInt(stringmarks[i]));
console.log(numbermarks)
var n1 = numbermarks[0];
var n2 = numbermarks[1];
var n3 = numbermarks[2];
var n4 = numbermarks[3];
var n5 = numbermarks[4];


var maxNum = (n1>n2 && n1>n3  && n1>n4 && n1>n5)?"n1 = "+n1+" of 1st student" +" --> is the largest number":"n1 = "+n1+" --> is not the largest number";
console.log(maxNum)
var maxNum = (n2>n1 && n2>n3  && n2>n4 && n2>n5)?"n2 = "+n2+" of 2nd student" +" --> is the largest number":"n2 = "+n2+" --> is not the largest number";
console.log(maxNum)
var maxNum = (n3>n1 && n3>n2  && n3>n4 && n3>n5)?"n3 = "+n3+" of 3rd student" +" --> is the largest number":"n3 = "+n3+" --> is not the largest number";
console.log(maxNum)
var maxNum = (n4>n1 && n4>n2  && n4>n3 && n4>n5)?"n4 = "+n4+" of 4th student" +" --> is the largest number":"n4 = "+n4+" --> is not the largest number";
console.log(maxNum)
var maxNum = (n5>n1 && n5>n2 && n5>n3 && n5>n4 )?"n5 = "+n5+" of 5th student" +" --> is the largest number":"n5 = "+n5+" --> is not the largest number";
console.log(maxNum)

})