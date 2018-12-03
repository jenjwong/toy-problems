/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let endIndexToSwap = nums.length -1;
    for (let i = 0; i <= endIndexToSwap; i++) {
        if (nums[i] === 0) {
            nums[i] = nums[endIndexToSwap];
            nums[endIndexToSwap] = 0;
            endIndexToSwap = endIndexToSwap -1;
        }

    }
    return nums;

};

moveZeroes([0,1,0,3,12])

