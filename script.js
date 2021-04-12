'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

alert('Загадывание случайного числа от 1 до 100');

function checking(counter){
    const x = 88;
    console.log('counter: ', counter);
    //Проверка после окончания попыток
    if (counter === 0){
        if (confirm('Попытки закончились, хотите сыграть еще?')){
            counter = 10;
            checking(counter);
        } else {
            alert('Благодарим вас за игру');
            return;
        }
    }
    //Сама игра
        let number = prompt('Угадай число от 1 до 100');
        if (number === null){
            alert('Игра окончена');
        } else if (!isNumber(number)) {
            alert('Введи число!');
            checking();
        } else if (x > number){
            counter--;
            alert('Загаданное число больше, осталось попыток: ' + counter);
            checking(counter);
        } else if (x < number) {
            counter--;
            alert('Загаданное число меньше, осталось попыток: ' + counter);
            checking(counter);
        } else if (x === Number(number)){ //При угадывании выход или еще играем
            if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')){
                counter = 10;
                checking(counter);
            } else {
                alert('Благодарим вас за игру');
            }
        }
}

checking(10);


