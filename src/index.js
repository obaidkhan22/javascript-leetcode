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
