const MynumbersArray = [1, -9, 7, 4, -5];

function getPositiveNumbersAverage(numbersArray){
    var sum=0;
    var count=0;
    var result;
    for (var i=0; i < numbersArray.length; i++){
        if (numbersArray[i]>0){
            sum = sum + numbersArray[i];
            count++;
        }
    }
    result = sum / count;
    return result;
}

var answer = getPositiveNumbersAverage(MynumbersArray);
console.log (answer);