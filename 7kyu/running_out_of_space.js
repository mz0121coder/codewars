/*Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
*/

function spacey(array) {
	let string = '';
	const result = [];
	array.forEach(item => {
		string += item;
		result.push(string);
	});
	return result;
}

console.log(spacey(['kevin', 'has', 'no', 'space'])); // [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
console.log(spacey(['this', 'cheese', 'has', 'no', 'holes'])); // ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']);

const validSpacing = s => s.trim() === s && !s.match(/\s{2,}/);
