// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(n) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    //Generating the binary
    const binary = generateBinary(n);
    
    //Generating the gap const
    const gap = generateGap(binary);
    
    //Returning the gap number
    return gap;
}

function generateBinary(n){
    return n.toString(2);
}

function generateGap(binary){
    const array = binary.split("");

    let gap = 0;
    
    let start = 0;
    
    for(let i = start; i < array.length; i++){
        
        const newGap = i - start - 1;
        
        if(array[i] == '1' && array[i - 1] != '1'){
            
            if(gap < newGap){
                gap = newGap;
            }
            
            start = i;
            continue
        }
        
        else if (array[i] == '1'){
            start = i;
        }
        
    }
    
    return gap;
}