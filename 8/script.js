// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener('DOMContentLoaded', () => {
    console.log('все теги прогрузились')
})


// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener('load', () => {
    console.log('страница загрузилась');
})
// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const superEl = document.querySelector('body')
const listener = (e) => {
    if (e.target.className === 'super_element') {
        console.log(`Класс "super_element" присутствует в элементе "${e.target.tagName.toLowerCase()}"`)
    } else {
        console.log(`Класс "super_element" отсутствует в элементе "${e.target.tagName.toLowerCase()}"`)
    }
}
superEl.addEventListener('click', listener);

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textareaEl = document.querySelector('textarea')
textareaEl.addEventListener('mouseover', () => {
    console.log('Вы навели на textarea.');
})

// 5. Необходимо повесить событие клика на тег ul. 
// В обработчике события в консоль необходимо выводить текст, который записан внутри элемента
// кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. 
// Необходимо использовать делегирование.

const ulEl = document.querySelector('ul')
const listenerUl = (e) => {
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.textContent);  
    }
    }
ulEl.addEventListener('click', listenerUl);

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится 
// текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, 
// под этим комментарием, своими словами.

//Вначале идет погружение, то есть событие бежит сверху вниз по DOM. Находит нужное событие и 
// потом начинает бежать вверх перебирая каждого родителя. 
// Так как событие из пункта 5 находится ниже события пункта 3, то и результат будет выводится
// в последовательности всплытия. Вначале 5, потом 3

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li

const liEls = document.querySelectorAll('li')
count = 0
liEls.forEach(element => {
    count++
    if (!(count % 2)) {
        element.style.backgroundColor = 'red'
    }
    
});