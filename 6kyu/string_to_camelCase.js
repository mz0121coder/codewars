function toCamelCase(str) {
  const words = str.split(/[^a-z]/i);
  const arr = [words[0]];
  for (let w = 1; w < words.length; w++) {
    arr.push(`${words[w].charAt(0).toUpperCase()}${words[w].substring(1)}`);
  }
  return arr.join("");
}
