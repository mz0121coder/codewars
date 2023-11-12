/*
Here your task is to Create a (nice) Christmas Tree.

You don't have to check errors or incorrect input values, every thing is ok without bad tricks, only one int parameter as input and a string to return;-)...

So what to do?

First three easy examples:

Input: 3 and Output:
  *
 ***
*****
 ###
 
 Input 9 and Output:
    *
   ***
  *****
   ***
  *****
 *******
  *****
 *******
*********
   ###
   
 Input 17 and Output:
      *
     ***
    *****
     ***
    *****
   *******
    *****
   *******
  *********
   *******
  *********
 ***********
  *********
 ***********
*************
     ###
     
Really nice trees, or what???! So merry Christmas;-)
You can see, always a root, always steps of hight 3, tree never smaller than 3 (return "") and no difference for input values like 15 or 17 (because (int) 15/3 = (int) 17/3). That's valid for every input and every tree. Lines are delimited by \r\n and no trailing white space allowed. I think there's nothing more to say - perhaps look at the testcases too;-)!

There are some static tests at the beginning and many random tests if you submit your solution.
 

Hope you have fun:-)!
 */

/*
start stars count at 3

calculate total rows in tree
loop from 1 to required rows

on each iteration:
calculate remainder (mod 3)
if remainder is 1, decrease stars by 2
else increase stars by 2

add row (repeat * by stars) to tree
transform tree to include side spaces + base
*/

function christmasTree(height) {
	if (height < 3) return '';
	const tree = [];
	const rows = Math.floor(height / 3) * 3;
	let stars = 3;

	for (let i = 1; i <= rows; i++) {
		const mod3 = i % 3;
		if (mod3 === 1) {
			stars -= 2;
		} else {
			stars += 2;
		}
		tree.push('*'.repeat(stars));
	}

	const maxWidth = tree.at(-1).length;
	return (
		tree
			.map(row => {
				const space = ' '.repeat((maxWidth - row.length) / 2);
				return space + row;
			})
			.join('\r\n') +
		'\r\n' +
		' '.repeat((maxWidth - 3) / 2) +
		'###'
	);
}

console.log(christmasTree(5));
console.log(christmasTree(10));
console.log(christmasTree(8));
console.log(christmasTree(2));
