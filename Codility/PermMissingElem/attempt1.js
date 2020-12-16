// First Attempt to reach 100% score
// Scored 50% 
// 50% Correctness and 50% Performance
function solution(array) {
    //Organizing the array with merge and sort
    const organizedArray = mergeSort(array);
    
    for(let i = 0; i < organizedArray.length; i++){
        if(organizedArray[i + 1] - organizedArray[i] > 1){
            return organizedArray[i] + 1;
        }
    }
    
    return 0;
    
}



//Using Merge Sort 
function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}