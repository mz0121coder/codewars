/*You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad
Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

Super Happy -> Happy -> Normal -> Sad -> Super Sad
If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

Super Sad -> Sad -> Normal -> Happy -> Super Happy
Example:

arr = [':D', ':|', ':)', ':(', ':D']
sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
More in test cases!

Notes:

The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
All emotions will be valid*/

function sortEmotions(arr, order) {
	const result = [];
	arr.forEach(x => {
		switch (x) {
			case ':D':
				result.push('5:D');
				break;
			case ':)':
				result.push('4:)');
				break;
			case ':|':
				result.push('3:|');
				break;
			case ':(':
				result.push('2:(');
				break;
			case 'T_T':
				result.push('1T_T');
		}
	});
	if (order === false) {
		return result.sort((a, b) => a[0] - b[0]).map(x => x.substring(1));
	} else {
		return result.sort((a, b) => b[0] - a[0]).map(x => x.substring(1));
	}
}

console.log(sortEmotions([':D', 'T_T', ':D', ':('], false)); //, false), [ 'T_T', ':(', ':D', ':D' ])
console.log(sortEmotions(['T_T', ':D', ':(', ':('], false)); //, false), [ 'T_T', ':(', ':(', ':D' ])
console.log(sortEmotions([':)', 'T_T', ':)', ':D', ':D'], false)); //, false),  [ 'T_T', ':)', ':)', ':D', ':D' ])
