/*Third day at your new cryptoanalyst job and you come across your toughest assignment yet. Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.
For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.
To encrypt 'hello' you'd substitute as follows,
              abcdefghijklmnopqrstuvwxyz
  hello ==>   |||||||||||||||||||||||||| ==> bshhk
              wednsaybcfghijklmopqrtuvxz
hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.

Good Luck.
*/
function keywordCipher(string, keyword) {
	let result = '';
	const alphabet = Array.from(Array(26))
		.map((e, i) => i + 65)
		.map(x => String.fromCharCode(x).toLowerCase());
	// split keyword letters, remove duplicates
	const letters = keyword.split('');
	const test = letters.filter((item, index) => letters.indexOf(item) === index);
	// new array with keyword (without duplicate letters) and rest of alphabet
	const encryption = [...test].concat(alphabet.filter(x => !test.includes(x)));
	// each letter is replaced with letter at same index from encryption array
	for (let i = 0; i < string.length; i++) {
		if (string[i].match(/[a-z]/i)) {
			result += encryption[alphabet.indexOf(string.toLowerCase()[i])];
		} else {
			// handle non letter characters e.g. spaces
			result += string[i];
		}
	}
	return result;
}

console.log(keywordCipher('WELCOME HOME', 'gridlocked')); // bshhk
/*describe("Basic tests",() =>{
  it("Tests", () => {
    assert.strictEqual(keywordCipher("Welcome home","secret"), "wticljt dljt", "Expect 'Welcome home' to return 'wlfimhl kmhl'");
    assert.strictEqual(keywordCipher("hello","wednesday"), "bshhk");
    assert.strictEqual(keywordCipher("HELLO","wednesday"), "bshhk");
    assert.strictEqual(keywordCipher("HeLlO","wednesday"), "bshhk");
    assert.strictEqual(keywordCipher("WELCOME HOME", "gridlocked"), "wlfimhl kmhl", "Expect 'WELCOME HOME' to return 'wlfimhl kmhl'");
    assert.strictEqual(keywordCipher("alpha bravo charlie", "delta"), "djofd eqdvn lfdqjga", "Expect 'alpha bravo chalie' to return 'djofd eqdvn lfdqjga'");
    assert.strictEqual(keywordCipher("Home Base", "seven"), "dlja esqa", "Expect 'Home Base' to return 'dlja esqa'");
    assert.strictEqual(keywordCipher("basecamp", "covert"), "ocprvcil", "Expect 'basecamp' to return 'ocprvcil");
    assert.strictEqual(keywordCipher("one two three", "rails"), "mks twm tdpss", "Expect 'one two three' to return 'mks twm tdpss'");
    assert.strictEqual(keywordCipher("Test", "unbuntu"), "raqr", "Expect 'Test' to return 'raqr'");
  })
})*/
