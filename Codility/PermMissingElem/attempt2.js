
// Second Attempt to reach 100% score
// Scored 50% 
// 100% Correctness and 0% Performance
function solution(array) {
    //Organizing the array
    array.sort();
    
    //Case we found a gap
    for(let i = 0; i < array.length; i++){
        if(array[i + 1] - array[i] > 1){
            return array[i] + 1;
        }
    }

    //Case the last number is the lenght number
    if(array[array.length - 1] == array.length){
        return array[array.length - 1] + 1
    }
    
    //Case the first number is not one
    else if(array[0] != 1){
        return 1
    }
    
    //Case length is zero, then n + 1 = 1
    else if(array.length == 0){
        return 1
    }
    
    return array[0];
    
}