function sortArray(array) {
  let count = 0;
  // test array only includes odd numbers in ascending order
  const test = array.filter(item => item % 2 !== 0).sort((a, b) => a - b);
  for (let x = 0; x < array.length; x++) {
    if (array[x] % 2 !== 0) {
      array[x] = test[count];
      count++;
    }
  }
  return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // [ 1, 3, 2, 8, 5, 4 ]
console.log(sortArray([5, 3, 1, 8, 0])); // [ 1, 3, 5, 8, 0 ]
console.log(sortArray([])); // []
