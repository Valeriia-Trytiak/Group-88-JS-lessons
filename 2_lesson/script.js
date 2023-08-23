/***** Області видимості *****/ //(Обов'язково !!!)

// Глобальна та локальна
// const
// let

// **************************************** Практика ****************************** //

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію if
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// const message = prompt("color?").toLocaleLowerCase();
// let action;

// if (message === "red") {
//   action = "stop";
// } else if (message === "yellow") {
//   action = "ready";
// } else if (message === "green") {
//   action = "go";
// } else {
//   action = "be careful";
// }

// console.log(action);
// console.log(message);

// Виконай рефакторинг попереднього завдання використовуючи конструкцію switch
// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// const message = prompt("color?").toLocaleLowerCase();
// let action;

// switch (message) {
//   case "red":
//     action = "stop";
//     break;
//   case "yellow":
//     action = "ready";
//     break;
//   case "green":
//     action = "go";
//     break;

//   default:
//     action = "be careful ";
//    // }

// console.log(action);
// console.log(message);

// Task - 3
// Потрібно створити додаток для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 правильна відповідь

//codewars

// 1. Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//   const bmi = weight / Math.pow(height, 2);
//   if (bmi <= 18.5) {
//     return "Underweight";
//   } else if (bmi <= 25.0) {
//     return "Normal";
//   } else if (bmi <= 30.0) {
//     return "Overweight";
//   }
//   return "Obese";
// }

// 2. Напишите функцию, которая разбивает строку и преобразует ее в массив слов.

// function stringToArray(string) {
//   return string.split(" ");
// }

// stringToArray("Robin Singh");

// 3. Напишите функцию для преобразования имени в инициалы. Это ката строго состоит из двух слов с одним пробелом между ними.

// На выходе должны быть две заглавные буквы с точкой, разделяющей их.

// function abbrevName(name) {
//   return name
//     .split(" ")
//     .map((i) => i[0].toUpperCase())
//     .join(".");
// }
// console.log(abbrevName("Sam Harris"));

//4. Вам даны lengthи width четырехугольника. Многоугольник может быть прямоугольным или квадратным.
// Если это квадрат, вернуть его площадь. Если это прямоугольник, верните его периметр.

// const areaOrPerimeter = function (l, w) {
//   if (l === w) {
//     return l * w;
//   } else
//   return 2 * (l + w);
// };

// const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

// console.log(areaOrPerimeter(6, 10));

// 5. Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

// Например:

// Учитывая, что [34, 15, 88, 2]ваше решение вернется2
// Учитывая, что [34, -345, -1, 100]ваше решение вернется-345
// Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.

// function findSmallestInt(args) {
//   const result = args.sort((a, b) => a - b).slice(0, 1);
//   return Number(result);
// }

// function findSmallestInt(args) {
//   return Math.min(...args);
// }

// console.log(findSmallestInt([78, 56, 232, 12, 8]));

// 6. После тяжелой четверти в офисе вы решаете немного отдохнуть в отпуске. Итак, вы забронируете рейс для себя и своей девушки и постараетесь оставить весь беспорядок позади.

// Вам понадобится арендованный автомобиль, чтобы передвигаться в отпуске. Менеджер по аренде автомобилей делает вам несколько хороших предложений.

// Каждый день аренды автомобиля стоит 40 долларов. Если вы арендуете автомобиль на 7 или более дней, вы получаете скидку в размере 50 долларов США. В качестве альтернативы, если вы арендуете автомобиль на 3 или более дней, вы получаете скидку в размере 20 долларов США.

// Напишите код, который выдает общую сумму за разные дни (d).

// function rentalCarCost(d) {
//   const minDiscount = 20;
//   const maxDiscount = 50;

//   const price = 40;
//   let total = 0;

//   if (d >= 7) {
//     return (total = d * price - maxDiscount);
//   } else if (d >= 3) {
//     return (total = d * price - minDiscount);
//   }
//   return (total = d * price);
// }

// console.log(rentalCarCost(1));

// 7. Ваша задача — создать функцию, которая выполняет четыре основные математические операции.

// Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
// Функция должна возвращать числовой результат после применения выбранной операции.

// function basicOp(operation, value1, value2) {
//   let result = 0;
//   switch (operation) {
//     case "+":
//       result = value1 + value2;
//       break;
//     case "-":
//       result = value1 - value2;
//       break;
//     case "*":
//       result = value1 * value2;
//       break;
//     case "/":
//       result = value1 / value2;
//       break;

//     default:
//       console.log("Invalid value");
//   }
//   return result;
// }

// console.log(basicOp("+", 4, 7));

// 8. Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.

// Пример: n=5-->[5,4,3,2,1]

// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i > 0; i -= 1) {
//     result.push(i);
//   }
//   return result;
// };

// console.log(reverseSeq(10));

// 9. Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.

// function descendingOrder(n) {
//   const result = [...n.toString()].sort((a, b) => b - a).join("");

//   return Number(result);
// }

// function descendingOrder(n) {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// }
// console.log(descendingOrder(1021));

// console.log(descendingOrder(0));
// console.log(descendingOrder(123456789));

// 10.

function nbYear(p0, percent, aug, p) {
  for (let index = 1; index < array.length; index += 1) {
    const element = array[index];
  }
}

// console.log(nbYear((1500, 5, 100, 5000)));

// const p0 = 1500;
// const percent = 5;
// const aug = 100;
// const p = 5000;

// const quantityFirstYear = p0 + (percent / 100) * p0 + aug;
// console.log(quantityFirstYear);
