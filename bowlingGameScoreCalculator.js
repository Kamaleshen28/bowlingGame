

const getBowlingGameScore = (rolls) => {
    if(!Array.isArray(rolls)){
        throw new Error('Input is not an array');
    }
    return rolls.reduce((score, currentPins, currentIndex) => {
        if(typeof currentPins === 'string'){
            throw new Error('Input only number array');
        }
        if(currentIndex%2 ===0){
            if(currentPins ===10){
                score = score + rolls[currentIndex+1] + rolls[currentIndex+2];
            } else if( (currentPins + rolls[currentIndex+1]) === 10){
                score = score + rolls[currentIndex+2] + 10;
            } else{
                score = score + rolls[currentIndex] + rolls[currentIndex+1];
            }
        }

        return score;
    }, 0);
};

module.exports = {getBowlingGameScore};
console.log(getBowlingGameScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
