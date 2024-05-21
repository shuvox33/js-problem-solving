function matchFinder(string1, string2) {
    if(typeof string1 != 'string' || typeof string2 != 'string'){
        return 'please give a valid input';
    }
    return string1.includes(string2);
}

let result = matchFinder('John Doe', 'D');
console.log(result);