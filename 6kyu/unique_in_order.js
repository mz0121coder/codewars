var uniqueInOrder = function (iterable) {
  const arr = [];
  for (let i = 0; i < iterable.length; i++) {
    if (
      (iterable[i] === iterable[i - 1] && iterable[i] !== iterable[i + 1]) ||
      (iterable[i] !== iterable[i - 1] && iterable[i] !== iterable[i + 1])
    )
      arr.push(iterable[i]);
  }
  return arr;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // [ 'A', 'B', 'C', 'D', 'A', 'B' ]
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [ 1, 2, 3 ]
