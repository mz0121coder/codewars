/*
Your task is to convert a given number into a string with commas added for easier readability. The number should be rounded to 3 decimal places and the commas should be added at intervals of three digits before the decimal point. There does not need to be a comma at the end of the number.

You will receive both positive and negative numbers.

Examples
commas(1) == "1"
commas(1000) == "1,000"
commas(100.2346) == "100.235"
commas(1000000000.23) == "1,000,000,000.23"
commas(-1) == "-1"
commas(-1000000.123) == "-1,000,000.123"
*/

// get decimals (if any) => fixed to 3 d.p. OR remove all ending zeros e.g. 0.300 => 0.3
// get digits (before the dot if it is there)
// loop backwards through digits, add number and/or comma (every 3 numbers) to start of result
// join result array
// remove leading commas
// add decimals and return result
function commas(num) {
	const result = [];
	const decimals = num.toString().split('.')?.[1] ?? '';
	const digits = num.toString().split('.')[0];
	let numCount = 0;
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i].match(/\d/)) {
			numCount++;
		}
		if (numCount % 3 === 0) {
			result.unshift(',' + digits[i]);
		} else {
			result.unshift(digits[i]);
		}
	}
	const beforeDecimals = result
		.join('')
		.replace(/^,/, '')
		.replace(/^(,-|-,)/, '-');
	console.log({ beforeDecimals });
	if (decimals.length > 0) {
		const dp = Number('0.' + decimals)
			.toFixed(3)
			.slice(1)
			.replace(/0+$/, '');
		return beforeDecimals + dp;
	}
	return beforeDecimals;
}

console.log(commas(1)); //, "1");
console.log(commas(1000)); //, "1,000");
console.log(commas(100.2346)); //, "100.235");
console.log(commas(1000000000.23)); //, "1,000,000,000.23");
console.log(commas(9123.212)); //, "9,123.212");
console.log(commas(-1)); //, "-1");
console.log(commas(-1000000.123)); //, "-1,000,000.123");
