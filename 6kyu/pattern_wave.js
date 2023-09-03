/*
# Task:
Complete the pattern, using the special character ■   □
In this kata, we draw some histogram of the sound performance of ups and downs.
# Rules:
parameter waves The value of sound waves, an array of number, all number in array >=0.
return a string, ■ represents the sound waves, and □ represents the blank part, draw the histogram from bottom to top.
# Example:
draw([1,2,3,4])

□□□■
□□■■
□■■■
■■■■

draw([1,2,3,3,2,1])

□□■■□□
□■■■■□
■■■■■■

draw([1,2,3,3,2,1,1,2,3,4,5,6,7])

□□□□□□□□□□□□■
□□□□□□□□□□□■■
□□□□□□□□□□■■■
□□□□□□□□□■■■■
□□■■□□□□■■■■■
□■■■■□□■■■■■■
■■■■■■■■■■■■■


draw([5,3,1,2,4,6,5,4,2,3,5,2,1])

□□□□□■□□□□□□□
■□□□□■■□□□■□□
■□□□■■■■□□■□□
■■□□■■■■□■■□□
■■□■■■■■■■■■□
■■■■■■■■■■■■■

draw([1,0,1,0,1,0,1,0])

■□■□■□■□
*/

/*
let str = '□'.repeat(waves.length)
define empty array, find max number in waves
create obj with keys equal to numbers in waves, 
values equal to an array with indexes of each number

loop from max num down to 1
if current number is a key in obj (use optional chaining)
loop through its array of indexes, replace character at each index in str with '■'
push str to arr
return arr.join('\n')
*/

function draw(waves) {
	let str = '□'.repeat(waves.length);
	const arr = [];
	const max = Math.max(...waves);
	const obj = {};
	waves.forEach((num, i) => {
		if (!(num in obj)) {
			obj[num] = [i];
		} else {
			obj[num].push(i);
		}
	});
	for (let i = max; i >= 1; i--) {
		obj[i]?.forEach(
			idx =>
				(str = str
					.split('')
					.map((el, i) => (i === idx ? '■' : el))
					.join(''))
		);
		arr.push(str);
	}
	return arr.join('\n');
}

const wave1 = '□□□■\n' + '□□■■\n' + '□■■■\n' + '■■■■';

const wave2 = '□□■■□□\n' + '□■■■■□\n' + '■■■■■■';

const wave3 =
	'□□□□□□□□□□□□■\n' +
	'□□□□□□□□□□□■■\n' +
	'□□□□□□□□□□■■■\n' +
	'□□□□□□□□□■■■■\n' +
	'□□■■□□□□■■■■■\n' +
	'□■■■■□□■■■■■■\n' +
	'■■■■■■■■■■■■■';

const wave4 =
	'□□□□□■□□□□□□□\n' +
	'■□□□□■■□□□■□□\n' +
	'■□□□■■■■□□■□□\n' +
	'■■□□■■■■□■■□□\n' +
	'■■□■■■■■■■■■□\n' +
	'■■■■■■■■■■■■■';

const wave5 = '■□■□■□■□';

console.log(draw([1, 2, 3, 4])); //, wave1, "")
console.log(draw([1, 2, 3, 3, 2, 1])); //, wave2, "")
console.log(draw([1, 2, 3, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7])); //, wave3, "")
console.log(draw([5, 3, 1, 2, 4, 6, 5, 4, 2, 3, 5, 2, 1])); //, wave4, "")
console.log(draw([1, 0, 1, 0, 1, 0, 1, 0])); //, wave5, "")
