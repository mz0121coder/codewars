/*Your task is to sort the characters in a string according to the following rules:
- Rule1: English alphabets are arranged from A to Z, case insensitive.
  ie. "Type" --> "epTy"
- Rule2: If the uppercase and lowercase of an English alphabet exist
  at the same time, they are arranged in the order of oringal input.
  ie. "BabA" --> "aABb"
- Rule3: non English alphabet remain in their original position.
  ie. "By?e" --> "Be?y"
Input/Output
[input] string s
A non empty string contains any characters(English alphabets or non English alphabets).
[output] a string
A sorted string according to the rules above.
Example
For s = "cba", the output should be "abc".
For s = "Cba", the output should be "abC".
For s = "cCBbAa", the output should be "AaBbcC".
For s = "c b a", the output should be "a b c".
For s = "-c--b--a-", the output should be "-a--b--c-".
For s = "Codewars", the output should be "aCdeorsw".
*/
function sortString(s) {
	// sort alphabetically, ignore case
	const letters = s.match(/[a-z]/gi).sort((a, b) => {
		a = a.toLowerCase();
		b = b.toLowerCase();
		return a === b ? 0 : a > b ? 1 : -1;
	});
	const result = [];
	let count = 0;
	for (let y = 0; y < s.length; y++) {
		if (s[y].match(/[a-z]/i)) {
			result.push(letters[count]);
			count++;
		} else {
			result.push(s[y]);
		}
	}
	return result.join('');
}
//  AaBB{Bb=//D-^ d@,Ef FfF GHi+$ Jk k[ }k!}%kKkMM !nNN (p  P qQR +}rR  .SSs s uUUVV#VWw wwxz
//  AaBB{Bb=//D-^ d@,Ef FfF GHi+$ Jk _[ }k!}%kkKkM !MnN (N  p PqQ +}Rr  .RSS s suUUV#VVW wwwxz
console.log(
	sortString(
		' MkWD{RB=//k-^ J@,xH Vfi uAz+$ kV _[ }a!}%pSBwn !kKB (b  q PQF +}wS  .kfU r wFNEs#NsR UVMdG'
	)
);
console.log(sortString('Codewars'));
console.log(sortString('-c--b--a-'));
console.log(sortString('cCBbAa'));
console.log(sortString('c b a'));
