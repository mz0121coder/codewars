/*
The "Roulette wheel selection", also known as "Fitness proportionate selection", is a genetic operator used in genetic algorithms for selecting potentially useful solutions for recombination.

Your task is to implement it.

You throw a coin in and has a chance to fall in one of the slots, the higher the fitness the higher the chance the element has to be selected.

Given the population and fitnesses, your task is to run the roulette to return one element.

Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.
*/

/*
select random number from 1 to 100
loop through population, assign number ranges based on their fitness
select correct number at selection point
*/

const select = (population, fitnesses) => {
	const selection = Math.floor(Math.random() * 100) + 1;
	const options = [];
	population.forEach((num, idx) => {
		const amount = 100 * fitnesses[idx];
		for (let i = 0; i < amount; i++) {
			options.push(num);
		}
	});

	return options[selection];
};

console.log(select([1, 2, 3, 4, 5], [0.31, 0.05, 0.38, 0.12, 0.14]));
