/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

function object(init){
    this.current_val = init;
    this.increment = function(){
        return ++this.current_val;
    }
    this.decrement = function(){
        return --this.current_val;
    }
    this.reset = function(){
        this.current_val = init;
        return this.current_val;
    }
};

var createCounter = function(init) {
    return new object(init);
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
