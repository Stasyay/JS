// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const array = [];
for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * 10));
}
console.log(array);

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log(`${sum} - сумма элементов массива`);

let min = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] <= min) {
        min = array[i]
    }
}
console.log(`${min} минимальное число`);

if (array.indexOf(3) !== -1) {
    console.log("в этом массиве есть число 3");
} else {
    console.log("в этом массиве нет числа 3");
}


const arrNew = ['x'];
let str = '';
for (let i = 0; i < 20; i++) {
    str = arrNew.join("");
    console.log(str);
    arrNew.push('x');
}