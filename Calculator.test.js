const calc = require('./Calculator');

describe('testing the outcomes of the calculations', () => {

    test('it should sum up correctly', () => {
        expect(calc.sum(1,3)).toBe(4);
    });

    test('it should subtract correctly', () => {
        expect(calc.subtract(10,5)).toBe(5);
    });

    test('it should multiply correctly', () => {
        expect(calc.multiply(30,3)).toBe(90);
    });
    
    test('it should divide correctly', () => {
        expect(calc.divide(300,30)).toBe(10);
    });

    test('it should also be able to handle floating variables', () => {
        expect(Number(calc.sum(5.23,4.832).toFixed(2))).toBe(10.06);
    });
    
});

describe('testing for error outputs from the functions', () => {
    test('it should give an TypeError for wrong input', () => {
        expect(() => {
            calc.sum('5',5);
        }).toThrow(TypeError);

        expect(() => {
            calc.divide('🧑',"24")
        }).toThrow(TypeError);
    });
  
});

