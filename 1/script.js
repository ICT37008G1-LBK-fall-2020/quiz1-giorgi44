const MynumbersArray = [1, 2, 41, 67, 8, -1, 43, 14, 75, 12, 56, 54.3, 65];

function getMaxNumber(numbersArray){ 
    let result = numbersArray[0];
    for (let i=0; i<numbersArray.length; i++){
        if (numbersArray[i]>result){
            result = numbersArray[i];
        }
    }
    return result;
}

let answer = getMaxNumber (MynumbersArray);
console.log (answer);