/*Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true
*/

const solution = (...args) =>
	args.filter(item => args.indexOf(item) !== args.lastIndexOf(item)).length > 0;

console.log(solution(1, 2, 3)); //false);
console.log(solution(1, 2, 3, 6, 5, 6)); //true);
console.log(solution('a', 'b', 'c', 'a')); //true);
console.log(solution(1, 2, 3, 'a', 'b')); //false);
