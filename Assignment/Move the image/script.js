let image = document.getElementById("image");
let moveBy = 10;

window.addEventListener('load',()=>{
    image.style.position = 'absolute';
    image.style.left =0;
    image.style.top = 0;
})
window.addEventListener('keyup',(e)=>{
    switch(e.key){
        case 'ArrowLeft':
            image.style.left = parseInt(image.style.left) - moveBy +'px';break;
        case 'ArrowRight':
            image.style.left = parseInt(image.style.left) + moveBy +'px';break;
        case 'ArrowUp':
            image.style.top = parseInt(image.style.top) - moveBy +'px';break;
        case 'ArrowDown':
            image.style.top = parseInt(image.style.top) + moveBy +'px';break;
            

    }
})