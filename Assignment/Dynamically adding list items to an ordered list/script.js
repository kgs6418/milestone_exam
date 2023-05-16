var arr = [
    "HTML and Semantics",
    "Starting with CSS ",
    "Working Template ",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript ",
    "Understanding Fundamental of Computer Science ",
    "Getting Started with Database",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers ",
    "Starting and Completing Full Fledge Projects",
    "project"
]

var list = document.getElementById("list")
var btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    arr.forEach(function(e){
        var li = document.createElement("li")
        li.innerText=e;
        console.log(li)
    })

})