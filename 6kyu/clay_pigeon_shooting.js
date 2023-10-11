/*
Pete and his mate Phil are out in the countryside shooting clay pigeons with a shotgun - amazing fun.

They decide to have a competition. 3 rounds, 2 shots each. Winner is the one with the most hits.

Some of the clays have something attached to create lots of smoke when hit, guarenteed by the packaging to generate 'real excitement!' (genuinely this happened). None of the explosive things actually worked, but for this kata lets say they did.

For each round you will receive the following format:

[{P1:'XX', P2:'XO'}, true]

That is an array containing an object and a boolean. Pl represents Pete, P2 represents Phil. X represents a hit and O represents a miss. If the boolean is true, any hit is worth 2. If it is false, any hit is worth 1.

Find out who won. If it's Pete, return 'Pete Wins!'. If it is Phil, return 'Phil Wins!'. If the scores are equal, return 'Draw!'.

Note that as there are three rounds, the actual input (x) will look something like this:

[[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]]
*/

function shoot(x) {
	let score1 = 0;
	let score2 = 0;

	x.forEach(round => {
		const [game, bool] = round;
		const pointsPerHit = bool ? 2 : 1;
		score1 += [...game.P1].filter(char => char === 'X').length * pointsPerHit;
		score2 += [...game.P2].filter(char => char === 'X').length * pointsPerHit;
	});

	return score1 > score2
		? 'Pete Wins!'
		: score2 > score1
		? 'Phil Wins!'
		: 'Draw!';
}

console.log(
	shoot([
		[{ P1: 'XX', P2: 'XO' }, true],
		[{ P1: 'OX', P2: 'OO' }, false],
		[{ P1: 'XX', P2: 'OX' }, true],
	])
); //, 'Pete Wins!');
console.log(
	shoot([
		[{ P1: 'XX', P2: 'XO' }, false],
		[{ P1: 'OX', P2: 'XX' }, false],
		[{ P1: 'OO', P2: 'XX' }, true],
	])
); //, 'Phil Wins!');
console.log(
	shoot([
		[{ P1: 'XX', P2: 'XX' }, true],
		[{ P1: 'XX', P2: 'OX' }, false],
		[{ P1: 'OO', P2: 'OX' }, true],
	])
); //, 'Phil Wins!');
