let counterValue = 0;
const incrementEl = document.querySelector('button[data-action="increment"]');
const decrementEl = document.querySelector('button[data-action="decrement"]');

incrementEl.addEventListener('click', function () {
    counterValue++;
    const counterEl = document.querySelector('#value');
    counterEl.innerHTML = `${counterValue}`
});
decrementEl.addEventListener('click', function () {
    counterValue--;
    const counterEl = document.querySelector('#value');
    counterEl.innerHTML = `${counterValue}`
});