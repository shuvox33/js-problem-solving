function cubeNumber(number) {
    if(typeof number == 'number'){
        return Math.pow(number, 3);
    }
    else{
        return "Please give a valid input";
    }
}

function matchFinder(string1, string2) {
    if(typeof string1 != 'string' || typeof string2 != 'string'){
        return 'please give a valid input';
    }
    return string1.includes(string2);
}

function sortMaker(arr) {
    if(arr[0] < 0 || arr[1] < 0){
        return 'Invalid Input';
    }
    if(arr[0] == arr[1]){
        return 'equal';
    }
    else if(arr[0] < arr[1]){
        arr[0] = arr[0] + arr[1];
        arr[1] = arr[0] - arr[1];
        arr[0] = arr[0] - arr[1];
        return arr;
    }
    else{
        return arr;
    }
}

function findAddress(obj) {

    let str = [];
    if(obj.street != null){
        str.push(obj.street);
    }
    else{
        str.push('__');
    }

    if(obj.house != null){
        str.push(obj.house);
    }
    else{
        str.push('__');
    }
    
    if(obj.society != null){
        str.push(obj.society);
    }
    else{
        str.push('__');
    }

    let newstr = str.join(', ');
    return newstr;
    
}

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