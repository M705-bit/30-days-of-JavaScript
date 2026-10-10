/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
//essa função vai retornar uma array, essa array vai conter apenas os elementos de arr que foram considerados verdadeiros de acprdo com a função fn, um valor verdadeiro é um onde boolean(value) retorna verdade
var filter = function(arr, fn) {
    let array = [];
    //const arr = arr;
    for(i=0; i<arr.length; i++){
        if (fn(arr[i],i)) { // se o retorno for truthy 
            array.push(arr[i]);
        } 

    }
    return array;
};
