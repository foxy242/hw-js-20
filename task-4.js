const counterValue = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let count = 0;

const increment = () => {
  count += 1;
  counterValue.textContent = count;
};

const decrement = () => {
  count -= 1;
  counterValue.textContent = count;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

// <div id="counter">
//  <button type="button" data-action="decrement">-1</button>
//  <span id="value">0</span>
//  <button type="button" data-action="increment">+1</button>
// </div>