const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputValidation);
function onInputValidation(event) {
    if (event.currentTarget.value.length === parseInt(event.currentTarget.getAttribute('data-length'))) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid')
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid')
    }
}