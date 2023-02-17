function moveZeros(arr) {
  let count = 0;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // push numbers above 0 to newArr
      newArr.push(arr[i]);
    } else {
      // increment count by 1 for each 0 in arr
      count++;
    }
  }
  for (let x = count; x > 0; x--) {
    // push a 0 for every count
    newArr.push(0);
  }
  return newArr;
}
