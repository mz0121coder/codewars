/*The aim of this Kata is to write a function which will reverse the case of all consecutive duplicate letters in a string. That is, any letters that occur one after the other and are identical.
If the duplicate letters are lowercase then they must be set to uppercase, and if they are uppercase then they need to be changed to lowercase.
Examples:
console.log(reverseCase("puzzles"))   // Expected Result: "puZZles"
console.log(reverseCase("massive") ) //  Expected Result: "maSSive"
console.log(reverseCase("LITTLE"))  //   Expected Result: "LIttLE"
console.log(reverseCase("shhh"))    //   Expected Result: "sHHH"
Arguments passed will include only alphabetical letters A–Z or a–z.
*/
function reverseCase(string) {
	let result = '';
	for (let i = 0; i < string.length; i++) {
		if (string[i] === string[i + 1] || string[i] === string[i - 1]) {
			if (string[i].match(/[A-Z]/)) {
				result += string[i].toLowerCase();
			} else {
				result += string[i].toUpperCase();
			}
		} else {
			result += string[i];
		}
	}
	return result;
}

console.log(reverseCase('puzzles')); // Expected Result: "puZZles"
console.log(reverseCase('massive')); //  Expected Result: "maSSive"
console.log(reverseCase('LITTLE')); //   Expected Result: "LIttLE"
console.log(reverseCase('shhh')); //   Expected Result: "sHHH"
console.log(reverseCase('WWW'));
/*describe("Tests", () => {
  it("test", () => {
Test.assertEquals(reverseCase('hello world'), 'heLLo world');
Test.assertEquals(reverseCase('HELLO WORLD'), 'HEllO WORLD');
Test.assertEquals(reverseCase('HeLlo World'), 'HeLlo World');
Test.assertEquals(reverseCase('WWW'), 'www');
  });
});
*/
