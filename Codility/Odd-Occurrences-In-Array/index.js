//Ideia:
//Pegar o numero [0]
//iterar no array até achar o par dele
//Quando achar o par dele, remover o item[0] e o par
//continuar
//Caso não encontrar par retorna o elemento

function solution(array) {
    
    //Iterating the array
    let newArray = [];
    while(newArray.length != 1){
        
        newArray = iterate(array);
        
        if(newArray.length == 1){
            return newArray[0];
        }
    }
    
    return 
    
}

function iterate(array){
    
    const number = array[0];
    
    //iterating and removing
    for(let i = 1; i < array.length; i++){
        
        //Case the number is alone
        if(array.length == 1){
            return [number]
        }
    
        //Case we found a pair
        else if(array[i] === number){
            array.splice(i, 1)
            array.shift()
            return array
        }
        
        else{
            continue;
        }
        
    }
    
    return [number]
    
    
}