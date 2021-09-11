const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const listEl = document.querySelector('#ingredients');
const elements = ingredients.reduce((acc, element) => acc + `<li>${element}</li>`, '');

listEl.insertAdjacentHTML('beforeend', elements);



