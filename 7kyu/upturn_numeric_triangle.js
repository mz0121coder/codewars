/*
Task
Raj has got into a problem, he solved the triangle pattern but stuck in the codes of "inverse triangle". Help him with the codes and remember to get the output as per given in examples below.

Rules:
Take input as 'n' which is always a natural number
Space between each digit
No space after the rows end
Examples
pattern(5)

1 1 1 1 1
 2 2 2 2
  3 3 3
   4 4
    5
    
    
pattern(9)

  1 1 1 1 1 1 1 1 1
   2 2 2 2 2 2 2 2
    3 3 3 3 3 3 3
     4 4 4 4 4 4
      5 5 5 5 5
       6 6 6 6
        7 7 7
         8 8
          9
        
        
pattern(16)

1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
  3 3 3 3 3 3 3 3 3 3 3 3 3 3
   4 4 4 4 4 4 4 4 4 4 4 4 4
    5 5 5 5 5 5 5 5 5 5 5 5
     6 6 6 6 6 6 6 6 6 6 6
      7 7 7 7 7 7 7 7 7 7
       8 8 8 8 8 8 8 8 8
        9 9 9 9 9 9 9 9
         0 0 0 0 0 0 0
          1 1 1 1 1 1
           2 2 2 2 2
            3 3 3 3
             4 4 4
              5 5
               6
*/

function pattern(n) {
	const triangle = [];
	for (let i = 1; i <= n; i++) {
		const row = `${' '.repeat(i - 1)}${(' ' + (i % 10)).repeat(n - (i - 1))}`;
		triangle.push(row);
	}
	return triangle.join('\n');
}

console.log(pattern(7)); //," 1 1 1 1 1 1 1\n  2 2 2 2 2 2\n   3 3 3 3 3\n    4 4 4 4\n     5 5 5\n      6 6\n       7");
console.log(pattern(12)); //," 1 1 1 1 1 1 1 1 1 1 1 1\n  2 2 2 2 2 2 2 2 2 2 2\n   3 3 3 3 3 3 3 3 3 3\n    4 4 4 4 4 4 4 4 4\n     5 5 5 5 5 5 5 5\n      6 6 6 6 6 6 6\n       7 7 7 7 7 7\n        8 8 8 8 8\n         9 9 9 9\n          0 0 0\n           1 1\n            2");
console.log(pattern(21)); //," 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n  2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2\n   3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3\n    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4\n     5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5\n      6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6\n       7 7 7 7 7 7 7 7 7 7 7 7 7 7 7\n        8 8 8 8 8 8 8 8 8 8 8 8 8 8\n         9 9 9 9 9 9 9 9 9 9 9 9 9\n          0 0 0 0 0 0 0 0 0 0 0 0\n           1 1 1 1 1 1 1 1 1 1 1\n            2 2 2 2 2 2 2 2 2 2\n             3 3 3 3 3 3 3 3 3\n              4 4 4 4 4 4 4 4\n               5 5 5 5 5 5 5\n                6 6 6 6 6 6\n                 7 7 7 7 7\n                  8 8 8 8\n                   9 9 9\n                    0 0\n                     1");
