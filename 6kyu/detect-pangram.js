function isPangram(string) {
  let count = 0;
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const letters = string
    .replace(/\s+/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .filter(item => !item.includes('.'))
    .join('');
  alphabet.forEach(item => {
    if (letters.includes(item)) {
      count++;
    }
  });
  return count === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.')); // true
console.log(isPangram('This is not a pangram.')); // false
console.log(isPangram('Cwm fjord bank glyphs vext quiz is a pangram')); // true
