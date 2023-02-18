function count(string) {
  let keys = {};
  // if a letter exists in string, add a property with starting value 1 (keys[letter])
  // add 1 every time the letter occurs again
  string.split('').map(letter => (keys[letter] = keys[letter] + 1 || 1));
  return keys;
}

console.log(count('abbb'));
