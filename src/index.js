/*
    Welcome to Solving JavaScript Questions on LeetCode. Using best practices with performance optimization.

    Ease question has a unique ID. You guys can access and find the solution to specific question you are solving in On LeetCode.

*/

//Questions

// ID: 2619: Array Prototype Last

Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};
// const array = [];
// console.log(array.last());

// Note---> we can also use this.at(-1) to return the last element in array or iterable. But this.at() is general and used for strings, array. It also convert -1 to length-1 and also checks whether the operand can be indexed or not. so we are using index access which is super fast and uses the cached indexes to access the last element.

//

// ID: 2620 Counter

const Counter = (number) => {
  //constraints

  // -1000<=n<=1000
  // -1000<=calls<=1000

  if (!Number.isInteger(n) || n < -1000 || n > 1000) {
    throw new RangeError("n must be an integer in [-1000, 1000].");
  }
  let calls = 0;

  return function () {
    if (calls > 1000) {
      throw new RangeError("Counter can called for a maximum of 1000 times.");
    }
    calls++;
    return n++;
  };
};

// ID: 1. Two Sum

const twoSum = function (nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;
    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }
    hashMap.set(current, i);
  }
};
