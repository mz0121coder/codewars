/*
Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

Task: Given the summary, find the number of pages n the book has.

Example
If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

Be aware that you'll get enormous books having up to 100.000 pages.

All inputs will be valid.
*/

// function amountOfPages(summary) {
// 	let digits = 0;
// 	for (let pages = 1; pages < Infinity; pages++) {
// 		digits += pages.toString().length;
// 		if (digits === summary) {
// 			return pages;
// 		}
// 	}
// }

function amountOfPages(summary) {
	let digits = 0;
	let pages = 0;
	while (digits < summary) {
		pages++;
		digits += pages.toString().length;
	}
	return pages;
}

console.log(amountOfPages(5)); //, 5)
console.log(amountOfPages(25)); //, 17)
console.log(amountOfPages(1095)); //, 401)
console.log(amountOfPages(185)); //, 97)
console.log(amountOfPages(660)); //, 256)
