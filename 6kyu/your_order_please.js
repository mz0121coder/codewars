function order(words) {
  // split words into array
  const arr = words.split(" ");
  const test = "i".repeat(arr.length).split("");
  for (let i = 0; i < arr.length; i++) {
    // match number in each word
    const num = arr[i].match(/\d/);
    // replace item in test array
    test.splice(num - 1, 1, arr[i]);
  }
  const result = test.join(" ");
  return result.length === 0 ? "" : result;
}
