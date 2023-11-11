/*
A bar of a certain metal of length l is subjected to the application of different perpendicular forces (that may have up or down direction). The bar has a foothold at its midpoint  S . Each point of application of the force is at a distance that has an integer value, respect to the point  S.

source: imgur.com

The array that represents the system drawn above is : [2, -3, 1, 2, 'S', 3, -4, 0, 2]

We are interested in a code that may predict if the bar will rotate with clockwise or anti clockwise spin, or the bar will remain steady.

From Physics we will need the concept of Moment of a Force.

As all the forces are coplanar (the same plane) and the equation of the magnitude of the resultant Moment is:

source: imgur.com

Applying the equation to our situation, we will have:

M = 2*(-4) + (-3)*(-3) + 1*(-2) + 2*(-1) + 3*1 + (-4)*2 + 0*3 + 2*4 = -8 + 9 - 2 - 2 + 3 - 8 + 8 = 0
As the result of the total moment for all the applied forces is 0, the bar will not rotate.

Suposse that we change a bit the situation having a new force, of magnitud 5 that goes up, at the empty point, on the right of S, at distance +3.

Now the resultant Moment is (-5) * 3 = -15, that means that the bar will rotate anti clockwise.

The function: rot_pred() (rotPred() in Javascript) will an array of odd amount of terms and a string 'S' in the middle.

python
rot_pred([2, -3, 1, 2, 'S', 3, -4, 0, 2]) == 'steady'

rot_pred([2, -3, 1, 2, 'S', 3, -4, -5, 2]) == 'anti clockwise' (
If the amount of elements on the right and on the left of S do not coincide the function will reject the entry.

rot_pred([2, -3, 1, 2 'S', 3, -4, -5]) == 'Not a Valid Entry'
Enjoy it!
*/

/*
check for same number of items on both sides of 'S'
check force on both sides
add to clocwise and anti clockwise counts
use math.abs for anti clockwise
return correct message based on steady or stronger force
*/

function rotPred(arr) {
	const sIndex = arr.indexOf('S');
	const left = arr.slice(0, sIndex);
	const right = arr.slice(sIndex + 1);
	if (left.length !== right.length) return 'Not a Valid Entry';

	let clockwise = 0;
	let antiClockwise = 0;

	left.forEach((num, idx) => {
		const pos = idx - sIndex;
		const force = num * pos;
		if (force > 0) {
			clockwise += force;
		} else {
			antiClockwise += Math.abs(force);
		}
	});

	right.forEach((num, idx) => {
		const pos = idx + 1;
		const force = num * pos;
		if (force > 0) {
			clockwise += force;
		} else {
			antiClockwise += Math.abs(force);
		}
	});

	if (clockwise === antiClockwise) return 'steady';
	if (clockwise > antiClockwise) return 'clockwise';
	if (antiClockwise > clockwise) return 'anti clockwise';
}

const arr1 = [2, -3, 1, 2, 'S', 3, -4, 0, 2];
console.log(rotPred(arr1)); //, 'steady');

const arr2 = [2, -3, 1, 2, 'S', 3, -4, -5, 2];
console.log(rotPred(arr2)); //,'anti clockwise');

const arr3 = [2, -3, 1, 2, 'S', 3, -4, -5];
console.log(rotPred(arr3)); //,'Not a Valid Entry');
