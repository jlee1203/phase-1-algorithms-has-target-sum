function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){
    // n steps
    const complement = target - array[i]
    // making complement variable but just 1 step per iteration
    for (let j = i + 1; j < array.length; j++){
      // because of a nested loop, its n * n steps
      if (array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Runtime is quadratic time or O(n^2)
*/

/* 
  iterating through an array of integers
    add the current integer to each integer in the array
      if int a and int b = target integer
        return true
      if no int a + int b = target integer
        return false
*/

/*
  Iterating through the array and defined a complement which is target - the current integer of the array 
  iteration. a second for loop is coded to serve as the other loop happening simultaenously at the +1 so it's
  always comparing 2 different integers.
  finally if the array[j] is the same as the complement, then we know its true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
