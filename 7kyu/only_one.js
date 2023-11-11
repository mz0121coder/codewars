/*
Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

  onlyOne() --> false
  onlyOne(true, false, false) --> true
  onlyOne(true, false, false, true) --> false
  onlyOne(false, false, false, false) --> false  
*/

function onlyOne() {
	let trueCount = 0;
	let falseCount = 0;
	const args = [...arguments];
	args.forEach(item => {
		if (item) {
			trueCount++;
		} else {
			falseCount++;
		}
	});
	return trueCount === 1 && falseCount > 0;
}

console.log(onlyOne());
console.log(onlyOne(true, false, false));
console.log(onlyOne(true, false, false, true));
console.log(onlyOne(false, false, false, false));
