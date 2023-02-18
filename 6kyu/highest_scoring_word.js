function high(x) {
  let score = 0;
  const arr = [];
  // lowercase alphabet array
  const alphabet = [...Array(26)].map((val, i) =>
    String.fromCharCode(i + 65).toLowerCase()
  );
  const words = x.split(' ');
  for (let i = 0; i < words.length; i++) {
    // add sum of each letter's index, push to arr
    const score = words[i]
      .split('')
      .map(letter => (letter = 1 + alphabet.indexOf(letter)))
      .reduce((acc, x) => acc + x);
    arr.push(score);
  }
  // return word at index of the highest score
  const max = arr.indexOf(Math.max(...arr));
  return words[max];
}

console.log(high('what time are we climbing up the volcano')); // volcano
