function sortArray(array) {
  // use a count for the index of odd and even numbers
  let oddCount = 0;
  let evenCount = 0;
  // array of ascending odd numbers
  const oddArray = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  // array of descending even numbers
  const evenArray = array.filter(num => num % 2 === 0).sort((a, b) => b - a);
  // iterate over original array
  for (let i = 0; i < array.length; i++) {
    // replace odd numbers with their match from odd array, increment count
    if (array[i] % 2 !== 0) {
      array[i] = oddArray[oddCount];
      oddCount++;
    } else {
      // do same for even numbers
      array[i] = evenArray[evenCount];
      evenCount++;
    }
  }
  return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4, 11])); // [1, 3,  8, 4, 5, 2, 11]
console.log(sortArray([2, 22, 37, 11, 4, 1, 5, 0])); // [22, 4, 1, 5, 2, 11, 37, 0]
console.log(sortArray([1, 111, 11, 11, 2, 1, 5, 0])); // [1, 1, 5, 11, 2, 11, 111, 0]
console.log(sortArray([])); // []
