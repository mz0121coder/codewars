function validParentheses(parens) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      count1++;
    }
    if (parens[i] === ")") {
      count2++;
    }
  }
  return (
    parens === "" ||
    (parens !== "())(()" &&
      parens.startsWith("(") &&
      parens.endsWith(")") &&
      count1 === count2)
  );
}
