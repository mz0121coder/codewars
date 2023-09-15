/*
Scenario
the rhythm of beautiful musical notes is drawing a Pendulum

Beautiful musical notes are the Numbers

Task
Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

The Smallest element of the list of integers , must come in center position of array/list.

The Higher than smallest , goes to the right .
The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.

!alt
Notes
Array/list size is at least 3 .

In Even array size , The minimum element should be moved to (n-1)/2 index (considering that indexes start from 0)

Repetition of numbers in the array/list could occur , So (duplications are included when Arranging).

Input >> Output Examples:
pendulum ([6, 6, 8 ,5 ,10]) ==> [10, 6, 5, 6, 8]
Explanation:
Since , 5 is the The Smallest element of the list of integers , came in The center position of array/list

The Higher than smallest is 6 goes to the right of 5 .

The Next higher number goes to the left of minimum number and So on .

Remember , Duplications are included when Arranging , Don't Delete Them .

pendulum ([-9, -2, -10, -6]) ==> [-6, -10, -9, -2]
Explanation:
Since , -10 is the The Smallest element of the list of integers , came in The center position of array/list

The Higher than smallest is -9 goes to the right of it .

The Next higher number goes to the left of -10 , and So on .

Remeber , In Even array size , The minimum element moved to (n-1)/2 index (considering that indexes start from 0) .

pendulum ([11, -16, -18, 13, -11, -12, 3, 18]) ==> [13, 3, -12, -18, -16, -11, 11, 18]
Explanation:
Since , -18 is the The Smallest element of the list of integers , came in The center position of array/list

The Higher than smallest is -16 goes to the right of it .

The Next higher number goes to the left of -18 , and So on .

Remember , In Even array size , The minimum element moved to (n-1)/2 index (considering that indexes start from 0) .

Tune Your Code , There are 200 Assertions , 60.000 element For Each .
*/

function pendulum(values) {
	const sortedValues = [...values].sort((a, b) => a - b);
	const result = [];
	sortedValues.forEach((num, idx) => {
		if (idx % 2 === 0) {
			result.unshift(num);
		} else {
			result.push(num);
		}
	});
	return result;
}

console.log(pendulum([4, 10, 9])); //, [10,4,9])
console.log(pendulum([8, 7, 10, 3])); //, [8,3,7,10])
console.log(pendulum([6, 6, 8, 5, 10])); //, [10,6,5,6,8])
console.log(pendulum([9, 4, 6, 4, 10, 5])); //, [9,5,4,4,6,10])
console.log(pendulum([4, 6, 8, 7, 5])); //, [8,6,4,5,7])
console.log(pendulum([10, 5, 6, 10])); //, [10,5,6,10])
console.log(pendulum([11, 12, 12])); //, [12,11,12])

console.log(pendulum([27, 27, 19, 21, 22, 28, 24])); //, [28,27,22,19,21,24,27])
console.log(pendulum([20, 19, 25, 16, 19, 30, 18, 24])); //, [25,20,19,16,18,19,24,30])
console.log(pendulum([22, 26, 21, 27, 24, 21, 15, 26, 25])); //, [27,26,24,21,15,21,22,25,26])
console.log(pendulum([19, 30, 16, 19, 28, 26, 28, 17, 21, 17])); //, [28,26,19,17,16,17,19,21,28,30])
console.log(pendulum([27, 28, 26, 28, 24, 22, 18, 16, 15, 24])); //, [28,26,24,18,15,16,22,24,27,28])
console.log(pendulum([17, 26, 15, 26, 26, 20, 16, 18, 15])); //, [26,26,18,16,15,15,17,20,26])
console.log(pendulum([22, 21, 19, 27, 18, 15, 24, 24])); //, [24,22,19,15,18,21,24,27])

console.log(pendulum([33, 38, 38, 36, 43, 48, 32, 40, 47, 50, 33])); //, [50,47,40,38,33,32,33,36,38,43,48])
console.log(pendulum([49, 40, 41, 41, 39, 43, 40, 46, 30, 47, 46, 40])); //, [47,46,41,40,40,30,39,40,41,43,46,49])
console.log(pendulum([48, 41, 38, 35, 50, 46, 38, 42, 37, 49, 44, 32, 37])); //, [50,48,44,41,38,37,32,35,37,38,42,46,49])
console.log(pendulum([49, 30, 39, 30, 40, 44, 43, 48, 47, 50, 42, 48, 33])); //, [50,48,47,43,40,33,30,30,39,42,44,48,49])
console.log(pendulum([48, 43, 35, 47, 39, 38, 38, 46, 49, 32, 42])); //, [49,47,43,39,38,32,35,38,42,46,48])

console.log(pendulum([-9, -2, -10, -6])); //, [-6,-10,-9,-2])
console.log(pendulum([-3, -6, -7])); //, [-3,-7,-6])
console.log(pendulum([-7, -8, -2, -3, -4])); //, [-2,-4,-8,-7,-3])
console.log(pendulum([-8, -8, -9, -10, -10, -3])); //, [-8,-9,-10,-10,-8,-3])
console.log(pendulum([-7, -10, -1, -10, -8])); //, [-1,-8,-10,-10,-7])
console.log(pendulum([-6, -2, -5])); //, [-2,-6,-5])

console.log(pendulum([-2, -11, -6, -11, -4, -3, -5])); //, [-2,-4,-6,-11,-11,-5,-3])
console.log(pendulum([-19, -9, -5, -6, -15, -16, -5, -12])); //, [-5,-9,-15,-19,-16,-12,-6,-5])
console.log(pendulum([-18, -2, -11, -10, -6, -7, -7, -12, -16])); //, [-2,-7,-10,-12,-18,-16,-11,-7,-6])
console.log(pendulum([-10, -10, -12, -13, -5, -10, -4, -17, -5, -12])); //, [-5,-10,-10,-12,-17,-13,-12,-10,-5,-4])

console.log(pendulum([-33, -21, -6, -29, -24, -5, -50, -42, -43, -17, -17])); //, [-5,-17,-21,-29,-42,-50,-43,-33,-24,-17,-6])
console.log(
	pendulum([-4, -50, -32, -23, -47, -44, -43, -24, -29, -44, -20, -35])
); //, [-20,-24,-32,-43,-44,-50,-47,-44,-35,-29,-23,-4])
console.log(
	pendulum([-36, -38, -44, -47, -41, -27, -10, -30, -22, -11, -23, -50, -23])
); //, [-10,-22,-23,-30,-38,-44,-50,-47,-41,-36,-27,-23,-11])

console.log(pendulum([-15, 8, 11])); //, [11,-15,8])
console.log(pendulum([8, -1, -1, -10])); //, [-1,-10,-1,8])
console.log(pendulum([-8, 15, 8, -3, -11])); //, [15,-3,-11,-8,8])
console.log(pendulum([15, 17, 3, -20, -1, 3])); //, [15,3,-20,-1,3,17])
console.log(pendulum([-8, -13, -19, -8, 7, 15, -10])); //, [15,-8,-10,-19,-13,-8,7])
console.log(pendulum([11, -16, -18, 13, -11, -12, 3, 18])); //, [13,3,-12,-18,-16,-11,11,18])
console.log(pendulum([7, -5, -20, 15, 2, 10, 18, 4, -10])); //, [18,10,4,-5,-20,-10,2,7,15])
console.log(pendulum([-6, 1, 2, 12, 19, 12, 19, -10, 13, 1])); //, [19,12,2,1,-10,-6,1,12,13,19])
