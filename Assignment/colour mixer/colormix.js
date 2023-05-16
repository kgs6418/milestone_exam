const color1= prompt("enter first color"); 
const color2= prompt("enter second color");
document.write(color1,color2)

switch (color1 ) {
    case "red" : switch (color2) {
        case "blue": console.log("Purple"); break;
        case "yellow": console.log("Orange");break;
        default : console.log(" Invalid color bination !"); break;
        }
    break;
      
    case "blue":
        switch (color2){
            case "yellow": console.log("Green");break;
            case "red":console.log("Purple");break;
            default : console.log(" Invalid color bination !"); break;}
    break;
    
    // vice - versa:-

    case "yellow":switch (color2) {
        case "red": console.log("Orange");break;
        case "blue":console.log("Green");break;
        default: console.log(" Invalid color bination !");break;}
    break;
    
   


    default : console.log(" Invalid color bination !"); break;
    
}
