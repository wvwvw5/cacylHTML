// Получение элемента дисплея
const display = document.getElementById("display");

// Добавление числа на дисплей
function addNumber(number) {
    display.value += number;
}

// Добавление оператора на дисплей
function addOperator(operator) {
    display.value += operator;
}

// Очистка дисплея
function clearDisplay() {
    display.value = "";
}

// Удаление последнего символа
function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

// Вычисление результата
function calculateResult() {
    try {
        // Используем функцию eval() для вычисления выражения на дисплее
        display.value = eval(display.value);
    } catch (e) {
        // Обработка ошибок
        display.value = "Ошибка";
    }
}
