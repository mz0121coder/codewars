function solution(str) {
  const arr = [];
  for (let i = 0; i < str.length; i += 2) {
    arr.push(str.substring(i, i + 2));
  }
  if (str.length % 2 !== 0) {
    arr.pop();
    arr.push(`${str.charAt(str.length - 1)}_`);
  }
  return arr;
}

console.log(solution('abcdefg')); // [ 'ab', 'cd', 'ef', 'g_' ]
console.log(solution('abcdef')); // [ 'ab', 'cd', 'ef' ]
