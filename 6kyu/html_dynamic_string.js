/*Generate a valid randomly generated hexadecimal color string. Assume all of them always have 6 digits.

Valid Output
#ffffff
#FfFfFf
#25a403
#000001
Non-Valid Output
#fff
#aaa
#zzzzz
cafebabe
#a567567676576756A7
*/

const generateColor = function () {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let result = '#';
	for (let i = 0; i < 3; i++) {
		const index = Math.floor(Math.random() * alphabet.length);
		result += alphabet[index].charCodeAt().toString(16);
	}
	return result;
};
