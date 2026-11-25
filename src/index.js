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

// ID: 142 FizzBuzz
const fizzbuzz = function (n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }
  return result;
};

// ID: 136 SingleNumber in a array
const singleNumber = function (nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
};

// ID: 387 Firsr Unique Character in a String

const firstUniqueChar = function (string) {
  let charMap = {};

  for (let ch in s) {
    charMap[ch] = (charMap[ch] ?? 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

// ID 20: Valid Paranthesis

const isValid = function (s) {
  const stack = [];
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (mapping[char]) {
      const topElement = stack.length > 0 ? stack.pop() : "#";
      if (topElement !== mapping[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

// 2621. Sleep

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

// ID: 2667 -> create hello world function
const createHelloWorldFunction = () => {
  return function (...args) {
    return "Hello World";
  };
};

// ID 35. Search Insert Position

const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

// 67. Add Binary

const addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;

    if (i >= 0) sum += Number(a[i--]);
    if (j >= 0) sum += Number(b[j--]);

    result.push(sum % 2);
    carry = Math.floor(sum / 2);
  }

  return result.reverse().join("");
};

// 100. Same Tree

const isSameTree = function (p, q) {
  // Both nodes are null
  if (!p && !q) return true;

  // One node is null
  if (!p || !q) return false;

  // Check values and subtrees
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

// ID: 118 Pascal's Triangle

const generateTriangle = (numRows) => {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    const rows = [];

    for (j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        rows.push(1);
      } else {
        rows.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
    triangle.push(rows);
  }
  return triangle;
};
