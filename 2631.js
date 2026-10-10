/**
 * @param {Function} fn
 * @return {Object}
 */

function addValue(map, key, value){
    if(!map.has(key)){
        map.set(key, []); 
    }
    map.get(key).push(value); 
}

Array.prototype.group = function(fn) {
    const multiValueMap = new Map(); 
     
    this.forEach(item => {
        const key = fn(item); 
        addValue(multiValueMap,key, item)
        //elementos que tiverem as mesma chaves ficam juntos 
    })
    //return multiValueMap; 
    return Object.fromEntries(multiValueMap);
};

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fn = function (n) { 
  return String(n > 5);
}


console.log(array.group(fn))
