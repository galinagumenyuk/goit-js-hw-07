const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onAddName);
function onAddName(event) {
    nameEl.textContent = event.currentTarget.value;
}
