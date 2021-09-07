const itemEl = document.querySelectorAll('.item');
console.log(`в списке ${itemEl.length} категорий `);


itemEl.forEach(element => {
    console.log(`Категория: ${element.querySelector('h2').textContent}`)
    console.log(`Количество элементов ${element.querySelectorAll('li').length}`);
})
   
