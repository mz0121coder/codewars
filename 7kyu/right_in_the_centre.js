/*
Right in the Center
This is inspired by one of Nick Parlante's exercises on the CodingBat online code practice tool.

Given a sequence of characters, does "abc" appear in the CENTER of the sequence?

The sequence of characters could contain more than one "abc".

To define CENTER, the number of characters in the sequence to the left and right of the "abc" (which is in the middle) must differ by at most one.

If it is in the CENTER, return True. Otherwise, return False.

Write a function as the solution for this problem. This kata looks simple, but it might not be easy.

Example
is_in_middle("AAabcBB")  ->  True
is_in_middle("AabcBB")   ->  True
is_in_middle("AabcBBB")  ->  False
*/

function isInMiddle(seq) {
	for (let i = 0; i < seq.length; i++) {
		if (seq.slice(i, i + 3) === 'abc') {
			const left = seq.slice(0, i);
			const right = seq.slice(i + 3);
			const diff = Math.abs(left.length - right.length);
			if (diff < 2) return true;
		}
	}
	return false;
}
