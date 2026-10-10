var chunk = function(arr, size) {
    const tam = arr.length; 
    const div = Math.trunc(tam/size)
    let value = 0; 
    let init = 0; 
    array = []; 
    array_de_array = [];
    let i = 0; 
    while (i < tam) {
       //se o resto for diferente de zeero nao [e intervalo]
        
        array.push(arr[i]); 
        value+=1; 
        
        if(array.length == size) { 
            array_de_array.push(array);
            array = []; 
        }

        i+=1; 
    }
    
    if (array.length > 0) {
        array_de_array.push(array);
    }
    return array_de_array
    
    
};

console.log(chunk([1,9,6,3,2], 3));


