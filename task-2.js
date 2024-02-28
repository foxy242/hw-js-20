const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
  
  const ul = document.getElementById('ingredients');
  
  ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    ul.appendChild(li);
  });

// В HTML є пустий список ul#ingredients.

// <ul id="ingredients"></ul>

// В JS є масив рядків.

// const ingredients = [
//  'Картопля',
//  'Гриби',
//  'Часник',
//  'Помідори',
//  'Зелень',
//  'Приправи',
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li 
// за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().