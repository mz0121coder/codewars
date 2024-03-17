/*
Suppose a student can earn 100% on an exam by getting the answers all correct or all incorrect. Given a potentially incomplete answer key and the student's answers, write a function that determines whether or not a student can still score 100%. Incomplete questions are marked with an underscore, "_".

["A", "_", "C", "_", "B"]   # answer key
["A", "D", "C", "E", "B"]   # student's solution

➞ True

# Possible for student to get all questions correct.

["B", "_", "B"]   # answer key
["B", "D", "C"]   # student's solution

➞ False

# First question is correct but third is wrong, so not possible to score 100%.

["T", "_", "F", "F", "F"]   # answer key
["F", "F", "T", "T", "T"]   # student's solution

➞ True

# Possible for student to get all questions incorrect.
Examples

(["B", "A", "_", "_"], ["B", "A", "C", "C"]) ➞ True

(["A", "B", "A", "_"], ["B", "A", "C", "C"]) ➞ True

(["A", "B", "C", "_"], ["B", "A", "C", "C"]) ➞ False

(["B", "_"], ["C", "A"]) ➞ True

(["B", "A"], ["C", "A"]) ➞ False

(["B"], ["B"]) ➞ True

(["_"], ["B"]) ➞ True
Notes

Test has at least one question.
len(key) == len(answers)
*/

function possiblyPerfect(key, answers) {
	let right = 0;
	let wrong = 0;
	for (let i = 0; i < key.length; i++) {
		if (key[i] !== '_') {
			if (key[i] === answers[i]) right++;
			if (key[i] !== answers[i]) wrong++;
		}
	}
	return right === 0 || wrong === 0;
}

console.log(possiblyPerfect([...'A_C_B'], [...'ADCEB'])); //, true );
console.log(possiblyPerfect([...'B_B'], [...'BDC'])); //, false );
console.log(possiblyPerfect([...'T_FFF'], [...'FFTTT'])); //, true );
console.log(possiblyPerfect([...'BA__'], [...'BACC'])); //, true );
console.log(possiblyPerfect([...'ABA_'], [...'BACC'])); //, true );
console.log(possiblyPerfect([...'ABC_'], [...'BACC'])); //, false );
console.log(possiblyPerfect([...'B_'], [...'CA'])); //, true );
console.log(possiblyPerfect([...'BA'], [...'CA'])); //, false );
console.log(possiblyPerfect([...'B'], [...'B'])); //, true );
console.log(possiblyPerfect([...'_T__'], [...'TFFF'])); //, true );
console.log(possiblyPerfect([...'_T__'], [...'TTFT'])); //, true );
console.log(possiblyPerfect([...'_TTT'], [...'TTFT'])); //, false );
console.log(possiblyPerfect([...'_TTT'], [...'TTTT'])); //, true );
console.log(possiblyPerfect([...'_TTT'], [...'FFFF'])); //, true );
console.log(possiblyPerfect([...'____'], [...'FFFF'])); //, true );
