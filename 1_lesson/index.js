/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

//  0 (число нуль)
// console.log(Boolean(0));
// // "" (порожній рядок)
// console.log(Boolean(''));
// // NaN
// console.log(Boolean(NaN));
// // undefined
// console.log(Boolean(undefined));
// // null
// console.log(Boolean(null));
// // false
// console.log(Boolean(false));

// Особливий підтип NaN
// console.log(NaN === NaN);
// console.log(Number("22.5aa"));
// console.log(undefined + 1);
// console.log(null + 1); // 0 + 1
// console.log(false + 1); // 0
// console.log(true + 1); // 1 + 1

// const value = 10;
// console.log(typeof value);

// const result = "value";
// console.log(typeof result);

// console.log(typeof value === "number");

/***** Комунікація з користувачем та можливість відображення якогось результату *****/

// alert("Hello word"); // только сообщаем инфо

// const name = prompt("введите имя");
// console.log(name);

// const result = confirm("учишь JS");

/***** Логічні оператори *****/
// const sum = 10;

// console.log(0 < sum && sum < 100);

// || запинается на правде и возвращает его или последний элемент

// ?? реагує лише на null undefined(пропускает) - оператор нулевого равенства

// && запинается на лжи и возвращает его или последнее значение true (имеет больший приоритет чем или)

// Приклади роботи

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "kiwi");

// console.log(true && 0 && "kiwi");

// console.log(true || 3);

// console.log(3 || true || 4);

// console.log("" || false || 7);

// console.log(null || 2 || undefined);

// console.log("" ?? 4);

// console.log(false ?? 7);

// console.log(null ?? 7);

// console.log(undefined ?? 7);

/***** Методи для роботки з числами (тип даних Number) *****/

// const str = "25.7a32px";
// Number.parseInt()
// console.log(Number.parseInt(str));

// Number.parseFloat()
// console.log(Number.parseFloat(str));

// Number.isNaN()  та метод isNaN()
// const num = Number(str); // NaN
// console.log(Number.isNaN(num));
// console.log(isNaN(num));
// console.log('=====================================');
// let value;
// value += 1;
// console.log(value);
// console.log(Number.isNaN(value));
// console.log(Number.isNaN(str));
// console.log(num === NaN);

// Класс Math
// const value = 11.5;
// console.log(Math.floor(value)); // округляет в меньшуюю сторону всегда!

// console.log(Math.ceil(value)); // округляет в большую сторону всегда (11,1 =12)

// Math.round();
// console.log(Math.round(value)); // округляет по математическим правилам

// console.log(Math.pow(5, 4)); // возведение в степень
// console.log(5 ** 4);

/***** Методи та властивості для роботки з рядками (тип даних String) *****/

const str = "Hello world";
// // length
// console.log(str.length);
// // toLowerCase()
console.log(str.toLowerCase());
// // toUpperCase()
console.log(str.toUpperCase());
// indexOf()

// console.log(str.indexOf(' '));
// console.log(str.indexOf('H'));

// console.log(str.includes('world'));
// const str = 'Hello world';

// endsWith()
// console.log(str.endsWith(' world'));
// startsWith()
// console.log(str.startsWith('h'));
// replace()
// console.log(str.replace('l', '🍕'));
// console.log(str);
// // replaceAll()
// console.log(str.replaceAll('l','🍟'));
// slice()

// console.log(str.slice(0, str.length-1));
// console.log(str);

// **************************************** Практика ****************************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль загальну кількість та ціну за кожен продукт та за всі продукти в кошику

// const apple = "🍎";

// const appleQuantity = 8;

// const applePrice = 34;

// const appleMessage = `Загальна вартість ${apple} складає ${appleQuantity * applePrice}`;

// const lemon = "🍋";

// const lemonQuantity = 3;

// const lemonPrice = 72;
// const lemonMessage = `Загальна вартість ${lemon} складає ${lemonQuantity * lemonPrice}`;

// const cherry = "🍒";

// const cherryQuantity = 3;

// const cherryPrice = 72;
// const cherryMessage = `Загальна вартість ${cherry} складає ${cherryQuantity * cherryPrice}`;

// const result = applePrice * appleQuantity + lemonPrice * lemonQuantity + cherryPrice * cherryQuantity;

// console.log(`${appleMessage}. ${lemonMessage}. ${cherryMessage}. Загальна вартість корзини складає ${result}`);

// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

const totalMinutes = 450;
const horas = Math.floor(totalMinutes / 60);
// const minutes = Math.floor(totalMinutes - horas * 60);
const minutes = totalMinutes % 60;

console.log(`${horas.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`);

// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

const name = "Harry";
const message = `Hello my name is ${name}`;
console.log(message);

// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

const incomingValue = 0;
const defaultValue = 10;
const value = incomingValue ?? defaultValue;
console.log(value);
