/*Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"*/

function evenChars(string) {
	return string.length < 2 || string.length > 100
		? 'invalid string'
		: string.split('').filter((x, i) => i % 2 === 1);
}

console.log(evenChars('1234')); //, ["2", "4"])
console.log(evenChars(';;;--')); //, [";", "-"])
console.log(evenChars('abcdefghijklm')); //, ["b", "d", "f", "h", "j", "l"])
console.log(
	evenChars(
		'aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva'
	)
); //, "invalid string")
console.log(evenChars('a')); //, "invalid string")
console.log(evenChars('')); //, "invalid string")
