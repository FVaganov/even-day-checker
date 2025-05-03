function isDayEven() {
    const today = new Date();
    const day = today.getDate();
    return day % 2 === 0;
}

function getDayMessage() {
    return isDayEven() ? "Сегодня чётное число" : "Сегодня нечётное число";
}

// Экспортируем для тестов
module.exports = {
    isDayEven,
    getDayMessage
};

// Выводим сообщение если файл запущен напрямую
if (require.main === module) {
    console.log(getDayMessage());
}