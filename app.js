const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keycode h2')
const keyCodeDiv = document.querySelector('.keycode');

window.addEventListener('keydown',(e)=>{
    displayKey.innerText = e.key;
    displayKeyCode.innerText = e.keycode;
})