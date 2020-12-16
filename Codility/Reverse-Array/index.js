function reverseArr(array) {
    let ret = [];
    for(let i = array.length-1; i >= 0; i--) {
        ret.push(array[i]);
    }
    return ret;
}

let a = [3,5,7,8]
let b = reverseArr(a);