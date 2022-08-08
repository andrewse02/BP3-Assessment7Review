// Runtime Complexity: O(n^2)
// Space Complexity: O(n)
const sumZero = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(nums[i] + nums[j] === 0) {
                return true;
            }
        }
    }

    return false;
};

console.log(sumZero([1,2,3]))