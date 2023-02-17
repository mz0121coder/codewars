function narcissistic(value) {
  let sum = 0;
  const digits = value.toString();
  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(parseInt(digits[i]), digits.length);
  }
  return sum === value;
}

console.log(narcissistic(7));
