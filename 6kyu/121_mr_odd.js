/*
Mr. Odd is my friend. Some of his common dialogues are: "Am I looking odd?", "It’s looking very odd", etc. Actually, "odd" is his favorite word. This Valentine's Day he went to meet his girlfriend, but he forgot to take a gift. So he told her that he did an odd thing. His girlfriend became angry and gave him a puzzle. She gave him a string (str) that contains only lowercase letters and told him:

Take 3 indexes i, j, k such that i < j < k and str[i] = "o", str[j] = "d", str[k] = "d" and cut them from the string to make a new string "odd". How many such new strings can you make?

Mr. Odd wants to impress his girlfriend, so he wants to make the maximum number of "odd" strings. As he is lazy, he asks you to help him and find the possible maximum.

Examples
For "oudddbo" the result should be 1:

cut one "odd": "[o]u[d][d]dbo"  -->  "_u__dbo"
no more "odd" in string
For "ooudddbd" the result should be 2:

1: "[o]ou[d][d]dbd"  -->  "_ou__dbd"
2: "_[o]u__[d]b[d]"  -->  "__u___b_"
no more "odd" in string
Input/Output
[input] string str: a non-empty string that contains only lowercase letters, 0 < str.length <= 10 000
[output] an integer: the maximum number of "odd" that can be cut
*/

function odd(str, count = 0) {
	let result = str;
	let oddStr = '';
	let idx = 0;

	for (let i = 0; i < result.length; i++) {
		if (idx === 0 && result[i] === 'o') {
			oddStr += 'o';
			idx++;
			result = `${result.slice(0, i)}-${result.slice(i + 1)}`;
		}
		if ((idx === 1 || idx === 2) && result[i] === 'd') {
			oddStr += 'd';
			idx++;
			result = `${result.slice(0, i)}-${result.slice(i + 1)}`;
		}
		if (idx === 3) {
			count++;
			break;
		}
	}

	return oddStr === 'odd' ? odd(result, count) : count;
}

concole.log(odd('oudddbo')); //, 1);
concole.log(odd('ouddddbo')); //, 1);
concole.log(odd('ooudddbd')); //, 2);
concole.log(odd('qoddoldfoodgodnooofostorodrnvdmddddeidfoi')); //, 6);
