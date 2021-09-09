const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const inputRef = document.querySelector('input');
const containerRef = document.querySelector('#boxes');

renderRef.addEventListener('click', function () {
    createBoxes(parseInt(inputRef.value));
});

function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
        const divEl = document.createElement('div');
        divEl.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
            function getRandom(min, max){
            return Math.ceil(Math.random() * (max - min) + min)
            };
        divEl.style.width = '' + (30 + i * 10) + 'px';
        divEl.style.height = '' + (30 + i * 10) + 'px';
        containerRef.append(divEl);
     }
}

destroyRef.addEventListener('click', destroyBoxes);
function destroyBoxes() {
    while (containerRef.firstChild) {
        containerRef.removeChild(containerRef.lastChild);
    }
}