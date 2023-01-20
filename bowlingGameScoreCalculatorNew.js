const getOpenFrameScore = (firstThrow, secondThrow) => {
    return firstThrow + secondThrow;
};

const getSpareFrameScore = (nextThrow) => {
    return 10 + nextThrow;
};

const getStrikeFrameScore = (secondThrow, thirdThrow) => {
    return 10 + secondThrow + thirdThrow;
};

const getBowlingGameScore1 = (rolls) => {
    let totalScore = 0;
    let frameCount = 0;
    let index = 0;

    if (!Array.isArray(rolls)) {
        throw new Error('Input is not an array');
    }

    if (rolls.length < 11 || rolls.length > 21) {
        throw new Error('Input array should be of length 11 to 21');
    }

    while (index + 1 < rolls.length) {
        if (rolls[index] > 10) {
            throw new Error('Invalid input2');
        }

        if (typeof rolls[index] === 'string') {
            throw new Error('Input only number array');
        }

        if (rolls[index] === 10) {
            totalScore = totalScore + getStrikeFrameScore(rolls[index + 1], rolls[index + 2]);
            if (index === rolls.length - 3) {
                frameCount += 1;
                break;
            }
            index += 1;
        } else if ((rolls[index] + rolls[index + 1]) === 10) {
            totalScore = totalScore + getSpareFrameScore(rolls[index + 2]);
            if (index === rolls.length - 3) {
                frameCount += 1;
                break;
            }
            index += 2;
        } else if ((rolls[index] + rolls[index + 1]) < 10) {
            totalScore = totalScore + getOpenFrameScore(rolls[index], rolls[index + 1]);
            index += 2;
        } else {
            throw new Error('Invalid input');
        }
        frameCount += 1;
    }
    if (frameCount != 10 || isNaN(totalScore)) {
        throw new Error('Invalid input1');
    }
    return totalScore;
};


const getbestScore = (games) => {
    if (games.length === 0) {
        throw new Error('Array is empty');
    }

    return games.reduce((max, game) => {
        let currentTotslScore = getBowlingGameScore1(game);
        return ((currentTotslScore > max) ? currentTotslScore : max);
    }, 0);
};


module.exports = { getBowlingGameScore1, getbestScore };
