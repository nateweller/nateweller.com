const leetcodeSnippet = 
`/**
 * 3Sum
 *
 * Given an integer array nums, returns all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
   
   let results = [];

   nums.sort((a, b) => a - b);
   
   for (let i = 0; i < nums.length - 2; i++) {
       if (nums[i] > 0) {
           break;
       }
       if (i > 0 && nums[i] === nums[i - 1]) {
           continue;
       }
       let left = i + 1;
       let right = nums.length - 1;
       while (left < right) {
           let sum = nums[i] + nums[left] + nums[right];
           if (sum === 0) {
               results.push([nums[i], nums[left], nums[right]]);
               while (left < right && nums[left] === nums[left + 1]) {
                   left++;
               }
               while (left < right && nums[right] === nums[right - 1]) {
                   right--;
               }
               left++;
               right--;
           } else if (sum > 0) {
               right--;
           } else {
               left++;
           }
       }
   }
   
   return results;
   
};`;

export default leetcodeSnippet;