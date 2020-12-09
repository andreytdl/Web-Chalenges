// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    //Thinking about performance
    if(A.length == K){
        return A;
    }
    
    //starting the logic
    return rotate(A, K);
    
}

//Rotates the Array
function rotate(array, times){
    
    let pivot;
    let pivot2;
    
    for(let j = 0; j < times; j++){
        
        //Changes the first and the last element
        pivot = array[0];
        array[0] = array[array.length - 1];
        
        //Changing the others
        for(let i = 1; i < array.length; i++){
            pivot2 = array[i] //8
            array[i] = pivot; //3
            pivot = pivot2; //8
        }
        
    }
    
    return array
    
}

