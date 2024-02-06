#!/usr/bin/node

const nums = process.argv.slice(2).map(n => Number(n));

if (nums.length === 0 || nums.length === 1) {
  console.log(0);
} else {
  let biggestNum = Math.max(nums[0], nums[1]);
  let secondBiggestNum = Math.min(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > biggestNum) {
      secondBiggestNum = biggestNum;
      biggestNum = nums[i];
    } else if (nums[i] > secondBiggestNum) {
      secondBiggestNum = nums[i];
    }
  }

  console.log(secondBiggestNum);
}
