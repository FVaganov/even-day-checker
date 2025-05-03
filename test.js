const { isDayEven, getDayMessage } = require('./index');

describe('Day Checker', () => {
    let originalDate;
    
    beforeAll(() => {
        // Сохраняем оригинальный Date
        originalDate = global.Date;
    });
    
    afterAll(() => {
        // Восстанавливаем оригинальный Date
        global.Date = originalDate;
    });
    
    it('should return true for even days', () => {
        // Мокаем дату - 2 число (чётное)
        global.Date = jest.fn(() => ({
            getDate: () => 2
        }));
        
        expect(isDayEven()).toBe(true);
        expect(getDayMessage()).toBe("Сегодня чётное число");
    });
    
    it('should return false for odd days', () => {
        // Мокаем дату - 3 число (нечётное)
        global.Date = jest.fn(() => ({
            getDate: () => 3
        }));
        
        expect(isDayEven()).toBe(false);
        expect(getDayMessage()).toBe("Сегодня нечётное число");
    });
});