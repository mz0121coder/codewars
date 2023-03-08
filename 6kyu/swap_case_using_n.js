/*Your job is to change the given string s using a non-negative integer n.

Each bit in n will specify whether or not to swap the case for each alphabetic character in s: if the bit is 1, swap the case; if its 0, leave it as is. When you finish with the last bit of n, start again with the first bit.

You should skip the checking of bits when a non-alphabetic character is encountered, but they should be preserved in their original positions.

Examples
swap("Hello world!", 11)  -->  "heLLO wORLd!"
...because 11 is 1011 in binary, so the 1st, 3rd, 4th, 5th, 7th, 8th and 9th alphabetical characters have to be swapped:

H e l l o   w o r l d !
1 0 1 1 1 x 0 1 1 1 0 x
^   ^ ^ ^    ^ ^ ^
More examples
swap("gOOd MOrniNg", 7864)        -->  "GooD MorNIng"
swap("", 11345)                   -->  ""
swap("the lord of the rings", 0)  -->  "the lord of the rings"*/

function swap(s, n) {
	let result = '';
	// array with repeated binary string
	let binary = n
		.toString(2)
		.repeat(s.length / 3)
		.split('');
	// add spaces at their index from s
	for (let i = 0; i < s.length; i++) {
		if (!s[i].match(/[a-z]/i)) {
			binary.splice(i, 0, ' ');
		}
		if (binary[i] === '1') {
			if (s[i].match(/[a-z]/)) {
				result += s[i].toUpperCase();
			} else {
				result += s[i].toLowerCase();
			}
		} else if (binary[i] === '0') {
			result += s[i];
		} else {
			result += s[i];
		}
	}
	return n < 1 ? s : result;
}
//'XjLTOTrKbk wbi oVRre ?uSGa wGOOQWXV ;…'
console.log(swap('xjLTotrKBk wBi OvRrE ?uSGa WgOOQwxV ', 9213537));
// console.log(swap('the lord of the rings', 0));
// console.log(swap('gOOd MOrniNg', 7864));
// console.log(swap('Hello world!', 11));
// for (let i = 0; i < s.length; i++) {
// 	if (s[i] === ' ') {
// 		binary.splice(i, 0, ' ');
// 	}
// }

// for (let i = 0; i < s.length; i++) {
// 	if (binary[i] === '1') {
// 		if (s[i].match(/[a-z]/)) {
// 			result += s[i].toUpperCase();
// 		} else {
// 			result += s[i].toLowerCase();
// 		}
// 	} else if (binary[i] === '0') {
// 		result += s[i];
// 	} else {
// 		result += ' ';
// 	}
// }
/*const {assert} = require("chai");
  
  describe("Fixed tests", function() {
    it("testing for \"Hello World!\", 11", function() {
      assert.strictEqual(swap('Hello world!', 11), 'heLLO wORLd!');
    });    
    it("testing for \"the quick broWn fox leapt over the fence\", 9", function() {
      assert.strictEqual(swap('the quick broWn fox leapt over the fence',9),'The QUicK BrowN foX LeaPT ovER thE FenCE');
    });    
    it("testing for \"eVerybody likes ice cReam\", 85", function() {
      assert.strictEqual(swap('eVerybody likes ice cReam',85),'EVErYbODy LiKeS IcE creAM');
    });    
    it("testing for \"gOOd MOrniNg\", 7864", function() {
    assert.strictEqual(swap('gOOd MOrniNg',7864),'GooD MorNIng');
  });    
  it("testing for \"how are you today?\", 12345", function() {
    assert.strictEqual(swap('how are you today?',12345),'HOw are yoU TOdaY?');
  });
  
  it('edge cases n = 0', function() {
    assert.strictEqual(swap('the lord of the rings', 0), 'the lord of the rings')
  });
  it('edge cases s is empty', function() {
    assert.strictEqual(swap('',11345),'')    
  });
});*/
