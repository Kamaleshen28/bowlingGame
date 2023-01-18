const {getBowlingGameScore} = require('./bowlingGameScoreCalculator')

describe('bowlingGameScoreCalculator', ()=>{
    describe('getBowlingGameScore', () => {
        it('should throw error when the input is not an array', () => {
            expect(()=>getBowlingGameScore(12)).toThrow('Input is not an array');
        })
        it('should ouput score when the input is an array', () => {
            expect(getBowlingGameScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
        })
        it('should throw error when the input array contains strings', () => {
            expect(() => getBowlingGameScore([0,0,"a"], 3)).toThrow('Input only number array');
        })
    })
} )