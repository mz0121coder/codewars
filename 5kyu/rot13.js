/*DESCRIPTION:
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
*/
function rot13(str) {
	let result = '';
	// uppercase alphabet
	const u = Array.from(Array(26))
		.map((e, i) => i + 65)
		.map(x => String.fromCharCode(x));
	// lowercase alphabet
	const l = u.map(x => x.toLowerCase());
	for (let i = 0; i < str.length; i++) {
		const uIndex = u.indexOf(str[i]);
		const lIndex = l.indexOf(str[i]);
		if (uIndex > -1 && uIndex < 13) {
			result += u[uIndex + 13];
		} else if (uIndex >= 13) {
			result += u[uIndex - 13];
		} else if (lIndex > -1 && lIndex < 13) {
			result += l[lIndex + 13];
		} else if (lIndex >= 13) {
			result += l[lIndex - 13];
		} else {
			result += str[i];
		}
	}
	return result;
}
console.log(rot13('EBG13 rknzcyr.')); //"ROT13 example."
console.log(rot13('This is my first ROT13 excercise!')); //"Guvf vf zl svefg EBG13 rkprepvfr!"
