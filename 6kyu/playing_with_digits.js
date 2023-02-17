function digPow(n, p) {
  let sum = 0;
  let multiple = p - 1;
  // use string to access each digit
  const digits = n.toString();
  for (let i = 0; i < digits.length; i++) {
    // increment multiple by 1
    multiple++;
    // add digit * multiple to sum
    sum += Math.pow(parseInt(digits[i]), multiple);
  }
  // return sum / original number or -1 if not a whole number
  const result = sum / n;
  return result % 1 === 0 ? result : -1;
}

console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51
