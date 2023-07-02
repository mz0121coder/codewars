// define empty result string
// calculate minimum distance of any lift from floor n, store as variable
// store lifts with their distance equal to minimum distance as a variable
// loop through lifts
// if current lift includes 'A' and n is odd, add 'A' to result
// if current lift includes 'B' and n is even, add 'B' to result
// if current lift includes 'C', add 'C' to result
// return empty string if minimum distance is 0, otherwise return result

function switchLift(status, n) {
	let result = '';

	const validLifts = Object.entries(status).filter(item =>
		n > 1 && n % 2 !== 0
			? !item.includes('B')
			: n > 1 && n % 2 === 0
			? !item.includes('A')
			: item
	);

	const minDistance = Math.min(...validLifts.map(val => Math.abs(val[1] - n)));

	const lifts = validLifts.filter(
		lift => Math.abs(lift[1] - n) === minDistance
	);

	lifts.forEach(el => {
		if (el.includes('A') && n % 2 !== 0) {
			result += 'A';
		}
		if (el.includes('B') && (n === 1 || (n > 1 && n % 2 === 0))) {
			result += 'B';
		}
		if (el.includes('C')) {
			result += 'C';
		}
	});
	console.log({ status, n, validLifts, minDistance, lifts });
	return minDistance === 0 ? '' : result;
}

console.log(switchLift({ A: 1, B: 1, C: 10 }, 3)); // , "A");
console.log(switchLift({ A: 1, B: 1, C: 10 }, 4)); // , "B");
console.log(switchLift({ A: 1, B: 1, C: 10 }, 5)); // , "A");
console.log(switchLift({ A: 1, B: 1, C: 10 }, 6)); // , "C");
console.log(switchLift({ A: 1, B: 1, C: 9 }, 5)); // , "AC");
console.log(switchLift({ A: 1, B: 2, C: 10 }, 6)); // , "BC");
console.log(switchLift({ A: 1, B: 1, C: 9 }, 1)); // , "");
console.log(switchLift({ A: 5, B: 4, C: 6 }, 1)); // , "B");
