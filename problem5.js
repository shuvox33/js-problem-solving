function canPay(changeArray, totalDue) {
    if(changeArray.length == 0){
        return 'Empty array';
    }
    let total = 0;
    for(let i = 0; i < changeArray.length; i++){
        total += changeArray[i];
    }
    if(total >= totalDue) return true;
    else return false;
}

let result = canPay([2,4,5,7,9],28);
console.log(result);