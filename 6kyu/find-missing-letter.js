function findMissingLetter(array) {
  let letter = '';
  // IIFE for testing an uppercase/lowercase alphabet array
  const alphabet = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps.concat(caps.map(letter => letter.toLowerCase()));
  })();
  // split each letter of array
  const test = array.join('').split('');
  // start and end of sequence
  const start = alphabet.indexOf(test[0]);
  const end = alphabet.indexOf(test[0]) + test.length;
  const sequence = alphabet.join('').substring(start, end).split('');
  // missing letter is first in sequence that doesn't match test
  for (let i = 0; i < test.length; i++) {
    if (test[i] !== sequence[i]) {
      letter = sequence[i];
      break;
    }
  }
  return letter;
}
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // e
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); // P
