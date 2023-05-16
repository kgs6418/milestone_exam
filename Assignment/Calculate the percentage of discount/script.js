let myFunction = (originalPrice,discountPrice)=>{

 var dis = (originalPrice-discountPrice)*100/originalPrice;
 console.log("percentage of discount :"+dis.toFixed(2))

}
myFunction(1000,800)
