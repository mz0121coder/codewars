/*Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 
** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.*/

function reverseAndMirror(s1, s2) {
	const transform = word =>
		word
			.split('')
			.map(x =>
				x.match(/[A-Z]/)
					? x.toLowerCase()
					: x.match(/[a-z]/)
					? x.toUpperCase()
					: x
			)
			.reverse();
	const inverted = transform(s1);
	const mirror = transform(s2);

	return `${mirror.join('')}@@@${inverted.join('')}${inverted
		.reverse()
		.join('')}`;
}
console.log(reverseAndMirror('FizZ', 'buZZ')); //zzUB@@@zZIffIZz
console.log(reverseAndMirror('String Reversing', 'Changing Case')); //ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING
