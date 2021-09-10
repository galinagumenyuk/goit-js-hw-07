const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');
const defaultValue = nameEl.textContent;

inputEl.addEventListener('input', onAddName);
function onAddName(event) {
    if (event.currentTarget.value.length === 0) {
        nameEl.textContent = defaultValue;
    } else {
        nameEl.textContent = event.currentTarget.value;
    }
    
}
