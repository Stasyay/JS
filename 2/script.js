// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
let num1 = prompt('введите первое число');
let num2 = prompt('введите второе число');

if (num1 <= 1) {
    console.log(`Ура число ${num1} равно или меньше 1`);
} else {
    console.log(`число ${num1} не попало под условие`);
}

if (num2 >= 3) {
    console.log(`Ура число ${num2} больше или равно 3`);
} else {
    console.log(`число ${num2} не попало под условие`);
}

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }
let test = true;
(test === true) ? console.log('+++') : console.log('---');

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
let day = 11;
if (day >= 1 && day <= 10) {
    console.log(`день ${day} - это первая декада`);
} else if (day > 10 && day <= 20) {
    console.log(`день ${day} - это вторая декада`);
} else if (day > 20 && day <= 31) {
    console.log(`день ${day} - это третяя декада`);
}

// Задание 4
let num = prompt('введите число');

const hundreds = Math.trunc(num % 1000 / 100);
const tens = Math.trunc(num % 100 / 10);
const units = Math.trunc(num % 10);

console.log(`В числе ${num} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);
