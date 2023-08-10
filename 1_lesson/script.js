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
console.log(NaN === NaN);
console.log(Number("22.5aa"));
console.log(undefined + 1);
console.log(null + 1); // 0 + 1
console.log(false + 1); // 0
console.log(true + 1); // 1 + 1
