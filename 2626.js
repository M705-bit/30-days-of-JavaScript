var reduce = function(nums, fn, init) {
    for (i=0;i<nums.length;i++){
        init=fn(init,nums[i]);
    } 
    return init  
};
