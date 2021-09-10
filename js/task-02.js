const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(element => {
  const elementEl = document.createElement('li');
  elementEl.textContent = `${element}`
  console.log(elementEl);
  const listEl = document.querySelector('#ingredients');
listEl.append(elementEl);
})
