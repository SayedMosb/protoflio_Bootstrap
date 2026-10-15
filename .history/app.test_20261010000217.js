
const { sum } = require('./app');

describe('Sum Tests', () => {

    it('should return 5 when adding 2 and 3', () => {
        const result = sum(2, 3);

        expect(result).toBe(5);
    });

    it('should return 30 when adding 10 and 20', () => {
        const result = sum(10, 20);

        expect(result).toBe(30);
    });

});