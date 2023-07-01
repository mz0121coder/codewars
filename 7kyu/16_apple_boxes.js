// define variables to track numbers of red and yellow apples
// loop through each box, from 1 up to and including k
// if current box has an odd size, increment yellow apples by box size
// if current box has an even size, increment red apples by box size
// return red apples minus yellow apples

function appleBoxes(k) {
	let yellow = 0;
	let red = 0;
	for (let i = 1; i <= k; i++) {
		const box = i * i;
		if (i % 2 !== 0) {
			yellow += box;
		} else {
			red += box;
		}
	}
	return red - yellow;
}

console.log(appleBoxes(5)); // , -15)
console.log(appleBoxes(15)); // , -120)
console.log(appleBoxes(36)); // , 666)
console.log(appleBoxes(1)); // , -1)
