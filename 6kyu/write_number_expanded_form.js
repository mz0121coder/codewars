/*Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
If you liked this kata, check out part 2!!*/
function expandedForm(num) {
	const arr = [];
	const x = num.toString();
	for (let i = 0; i < x.length; i++) {
		if (x[i] != 0) {
			arr.push(`${x[i]}${'0'.repeat(x.substring(i + 1).length)}`);
		}
	}
	return arr.join(' + ');
}
console.log(expandedForm(70304));

function mutation(arr) {
	let test = true;
	arr[1].split('').forEach(letter => {
		if (!arr[0].toUpperCase().includes(letter.toUpperCase())) {
			test = false;
		}
	});
	return test;
}
console.log(mutation(['hello', 'hey']));
