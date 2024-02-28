const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('ul');

console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
    const categoryName = category.previousElementSibling.textContent.trim();
    const itemsCount = category.querySelectorAll('li').length;
    console.log(`Категорія: ${categoryName}`);
    console.log(`Кількість елементів: ${itemsCount}`);
});

// В HTML є список категорій ul#categories.

// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).

// Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4
