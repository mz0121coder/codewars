function toWeirdCase(string) {
  const arr = [];
  string.split(' ').forEach(word => {
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        arr.push(word[i].toUpperCase());
      } else {
        arr.push(word[i]);
      }
    }
  });
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/\s/)) {
      arr.splice(i, 0, ' ');
    }
  }
  return arr.join('');
}

console.log(toWeirdCase('This is a test')); // 'ThIs Is A TeSt';
