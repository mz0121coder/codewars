/*
Many websites use weighted averages of various polls to make projections for elections. They’re weighted based on a variety of factors, such as historical accuracy of the polling firm, sample size, as well as date(s). The weights, in this kata, are already calculated for you. All you need to do is convert a set of polls with weights, into a fixed projection for the result.

Task:
Your job is to convert an array of candidates (variable name candidates) and an array of polls (variable name polls), each poll with two parts, a result and a weight, into a guess of the result, with each value rounded to one decimal place, through use of a weighted average. Weights can be zero! Don't worry about the sum not totalling 100. The final result should be a hash in Ruby and Crystal, dictionary in Python, or object in JS in the format shown below:

{ 
  "<candidate name 1>": "<candidate's projected percent, rounded to nearest tenth>",
  "<candidate name 2>": "<candidate's projected percent, rounded to nearest tenth>",
  ...
}
The input should not be modified.

Calculation for projections:
[(poll1 * weight1) + (poll2 * weight2) + ...] / (weight1 + weight2 + ...)
An example:
candidates = ['A', 'B', 'C']

poll1res = [20, 30, 50]
poll1wt = 1
poll1 = [poll1res, poll1wt]

poll2res = [40, 40, 20]
poll2wt = 0.5
poll2 = [poll2res, poll2wt]

poll3res = [50, 40, 10]
poll3wt = 2
poll3 = [poll3res, poll3wt]

polls = [poll1, poll2, poll3]

predict(candidates, polls)
#=> {
     'A': 40,
     'B': 37.1,
     'C': 22.9
    }

# because...

candidate 'A' weighted average
  = ((20 * 1) + (40 * 0.5) + (50 * 2)) / (1 + 0.5 + 2)
  = (20 + 20 + 100) / 3.5
  = 140 / 3.5
  = 40

candidate 'B' weighted average
  = ((30 * 1) + (40 * 0.5) + (40 * 2)) / (1 + 0.5 + 2)
  = (30 + 20 + 80) / 3.5
  = 130 / 3.5
  = 37.142857...
  ≈ 37.1 (round to nearest tenth)

candidate 'C' weighted average
  = ((50 * 1) + (20 * 0.5) + (10 * 2)) / (1 + 0.5 + 2)
  = (50 + 10 + 20) / 3.5
  = 80 / 3.5
  = 22.857142...
  ≈ 22.9 (round to nearest tenth)
*/

/*
calculate total weights from polls
define method to get score for a candidate:
loop through polls, add score from current position * weight to a total
return total rounded to 1 dp

loop through candidates, for each candidate:
call the method and add output as a value to an obj
*/

function predict(candidates, polls) {
	const averages = {};
	const weights = polls.reduce((sum, [scores, weight]) => sum + weight, 0);
	const getScore = position => {
		let score = 0;
		polls.forEach(([scores, weight]) => (score += scores[position] * weight));
		return Number((score / weights).toFixed(1));
	};
	candidates.forEach((name, index) => {
		averages[name] = getScore(index);
	});
	return averages;
}

let candidates = ['A', 'B', 'C'];

let poll1res = [20, 30, 50];
let poll1wt = 1;
let poll1 = [poll1res, poll1wt];

let poll2res = [40, 40, 20];
let poll2wt = 0.5;
let poll2 = [poll2res, poll2wt];

let poll3res = [50, 40, 10];
let poll3wt = 2;
let poll3 = [poll3res, poll3wt];

let polls = [poll1, poll2, poll3];

console.log(candidates, polls);

console.log(predict(candidates, polls)); // { A: 40, B: 37.1, C: 22.9 }

candidates = ['A', 'B', 'C'];

poll1res = [25, 10, 65];
poll1wt = 0.5;
poll1 = [poll1res, poll1wt];

poll2res = [5, 5, 90];
poll2wt = 0.5;
poll2 = [poll2res, poll2wt];

poll3res = [60, 10, 30];
poll3wt = 4;
poll3 = [poll3res, poll3wt];

polls = [poll1, poll2, poll3];

console.log(predict(candidates, polls)); // { A: 51.0, B: 9.5, C: 39.5 }

candidates = ['A', 'B', 'C'];

poll1res = [10, 10, 80];
poll1wt = 1;
poll1 = [poll1res, poll1wt];

poll2res = [20, 30, 50];
poll2wt = 1;
poll2 = [poll2res, poll2wt];

poll3res = [30, 20, 50];
poll3wt = 1;
poll3 = [poll3res, poll3wt];

polls = [poll1, poll2, poll3];

console.log(predict(candidates, polls)); // { A: 20.0, B: 20.0, C: 60.0 }

candidates = ['A', 'B', 'C'];

poll1res = [5, 15, 80];
poll1wt = 2;
poll1 = [poll1res, poll1wt];

poll2res = [100, 0, 0];
poll2wt = 0;
poll2 = [poll2res, poll2wt];

poll3res = [10, 60, 30];
poll3wt = 1;
poll3 = [poll3res, poll3wt];

polls = [poll1, poll2, poll3];

console.log(predict(candidates, polls)); // { A: 6.7, B: 30.0, C: 63.3 }
