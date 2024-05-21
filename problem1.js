function cubeNumber(number) {
    if(typeof number == 'number'){
        return Math.pow(number, 3);
    }
    else{
        return "Please give a valid input";
    }
}

const result = cubeNumber(6);
console.log(result);