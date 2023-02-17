function pigIt(str) {
  const arr = [];
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if (w.match(/[a-z]/i)) {
      arr.push(`${w.substring(1)}${w[0]}ay`);
    } else {
      arr.push(w);
    }
  }
  return arr.join(" ");
}
