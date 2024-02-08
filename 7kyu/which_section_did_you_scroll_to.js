/*
Your website is divided vertically in sections, and each can be of different size (height).
You need to establish the section index (starting at 0) you are at, given the scrollY and sizes of all sections.
Sections start with 0, so if first section is 200 high, it takes 0-199 "pixels" and second starts at 200.

Example:
With scrollY = 300 and sizes = [300,200,400,600,100]

the result will be 1 as it's the second section.

With scrollY = 1600 and size = [300,200,400,600,100]

the result will be -1 as it's past last section.

Given the scrollY integer (always non-negative) and an array of non-negative integers (with at least one element), calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error).
*/

function getSectionIdFromScroll(scrollY, sizes) {
	let height = -1;
	let index = -1;
	for (const size of sizes) {
		index++;
		height += size;
		if (height >= scrollY) return index;
	}
	return -1;
}

console.log(getSectionIdFromScroll(299, [300, 200, 400, 600, 100]));
console.log(getSectionIdFromScroll(300, [300, 200, 400, 600, 100]));
console.log(getSectionIdFromScroll(1600, [300, 200, 400, 600, 100]));
