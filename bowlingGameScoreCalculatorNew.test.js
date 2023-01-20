const { getBowlingGameScore1, getbestScore } = require('./bowlingGameScoreCalculatorNew.js');

describe('bowlingGameScoreCalculator', () => {
    describe('getBowlingGameScore', () => {
        it('should throw error when the input is not an array', () => {
            expect(() => getBowlingGameScore1(12)).toThrow('Input is not an array');
        });
        it('should throw error when the input array contains strings', () => {
            expect(() => getBowlingGameScore1([3, 6, 3, 'hello', 3, 6, 3, 6, 3, 6, 3, 6, 3, 'kamal'])).toThrow('Invalid input');
        });
        it('should throw error if the input is 11 and last frame is not open and rest are strike', () => {
            expect(() => getBowlingGameScore1([10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toThrow('Invalid input1');
        });
        it('should throw error if any of the element is greater than 10', () => {
            expect(() => getBowlingGameScore1([9, 1, 10, 10, 10, 10, 10, 10, 10, 11, 10, 10, 10])).toThrow('Invalid input2');
        });
        it('should throw error when the input array length is less than 11 or geater than 21', () => {
            expect(() => getBowlingGameScore1([0, 0, 0])).toThrow('Input array should be of length 11 to 21');
            expect(() => getBowlingGameScore1([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toThrow('Input array should be of length 11 to 21');
        });
        it('should show output if the array is a valid input', () => {
            expect(getBowlingGameScore1([10, 9, 1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(280);
            expect(getBowlingGameScore1([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30);
            expect(getBowlingGameScore1([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
            expect(getBowlingGameScore1([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(16);
            expect(getBowlingGameScore1(([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))).toBe(300);
        });
    });
    describe('getbestScore', () => {
        it('should throw error if the array is empty', () => {
            expect(() => getbestScore([])).toThrow('Array is empty');
        });
        it('should ouput number if the input is valid', () => {
            expect(getbestScore([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
                [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]])).toBe(300);
        });

    });
});

