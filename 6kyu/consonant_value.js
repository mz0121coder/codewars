function solve(s) {
	const letters = [...Array(26)].map((val, i) =>
		String.fromCharCode(i + 65).toLowerCase()
	);
	return s
		.split('')
		.filter(x => x.match(/[bcdfghjklmnpqrstvwxys]/))
		.map(x => letters.indexOf(x) + 1)
		.sort((a, b) => b - a)[0];
}
console.log(solve('catchphrase'));

const checkSign = num => (num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero');
