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

let result = sortMaker([4,2]);
console.log(result);