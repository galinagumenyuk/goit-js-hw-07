const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
inputRef.addEventListener('input', onUpdateStyle);

function onUpdateStyle() {
     textRef.style.fontSize = inputRef.value + 'px';
    
}