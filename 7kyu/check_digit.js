/*
In this Kata, you will be given a number, two indexes (index1 and index2) and a digit to look for. Your task will be to check if the digit exists in the number, within the indexes given.
Be careful, the index2 is not necessarily more than the index1;
  index1 == 2 and index2 == 5 -> snippet from 2 to 5 positons;
  index1 == 5 and index2 == 2 -> snippet from 2 to 5 positons;
  number.length = 14;
  0 <= index1 < 14;
  0 <= index2 < 14;
  index2 is inclusive in search snippet;
  0 <= digit <= 9;
Find more details below:
  checkDigit(12345678912345, 1, 0, 1) -> true, 1 exists in 12
  checkDigit(12345678912345, 0, 1, 2) -> true, 2 exists in 12
  checkDigit(67845123654000, 4, 2, 5) -> true, 5 exists in 845
  checkDigit(66688445364856, 0, 0, 6) -> true, 6 exists in 6
  checkDigit(87996599994565, 2, 5, 1) -> false, 1 doesn't exist in 9965
*/
function checkDigit(number, index1, index2, digit) {
	const n = number.toString();
	const d = digit.toString();
	const max = Math.max(index1, index2);
	const min = Math.min(index1, index2);
	return n.substring(min, max + 1).includes(d);
}

console.log(checkDigit(67845123654, 4, 2, 4));
/*
describe("Basic tests",() => {
  it("Tests", () => {
    assert.strictEqual(checkDigit(1234567, 1, 0, 1), true);
    assert.strictEqual(checkDigit(1234567, 0, 1, 2), true);
    assert.strictEqual(checkDigit(67845123654, 4, 2, 4), true);
    assert.strictEqual(checkDigit(6668844536485, 0, 0, 6), true);
    assert.strictEqual(checkDigit(9999999999, 2, 5, 1), false);
  })
})*/
