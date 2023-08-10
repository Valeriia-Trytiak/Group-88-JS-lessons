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
