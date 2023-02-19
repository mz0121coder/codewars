function goodVsEvil(good, evil) {
	const gChars = [1, 2, 3, 3, 4, 10];
	const g = good.split(' ');
	let gScore = 0;
	for (let x = 0; x < g.length; x++) {
		gScore += g[x] * gChars[x];
	}
	const eChars = [1, 2, 2, 2, 3, 5, 10];
	const e = evil.split(' ');
	let eScore = 0;
	for (let y = 0; y < e.length; y++) {
		eScore += e[y] * eChars[y];
	}
	return gScore < eScore
		? 'Battle Result: Evil eradicates all trace of Good'
		: gScore > eScore
		? 'Battle Result: Good triumphs over Evil'
		: 'Battle Result: No victor on this battle field';
}

console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));
