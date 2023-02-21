function zipWith(fn, a0, a1) {
	const arr = [];
	for (let i = 0; i < Math.min(a0.length, a1.length); i++) {
		arr.push(fn(a0[i], a1[i]));
	}
	return arr;
}

console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]));
console.log(
	zipWith(
		function (a, b) {
			return a + b;
		},
		[0, 1, 2, 3],
		[0, 1, 2, 3]
	)
);
console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
