function avgArray(arr) {
	const results = [];
	for (let i = 0; i < arr[0].length; i++) {
		const total = arr.reduce((acc, curr) => acc + curr[i], 0);
		results.push(total / arr.length);
	}
	return results;
}
