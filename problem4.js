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

let obj = {street: 10,society: 'Earth Perfect'};
let result = findAddress(obj);
console.log(result);