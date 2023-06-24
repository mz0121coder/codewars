// make variables to track cost of tube and bus journeys
// loop through each journey
// add 2.40 for each string(tube journey) to tube cost
// add 1.50 for 2 buses in a row, or 1.50 for a single

function londonCityHacker(journey) {
	let tubeCost = 0;
	let busCost = 0;
	let busCount = 0;
	journey.forEach(el => {
		if (typeof el === 'string') {
			tubeCost += 2.4;
			busCount = 0;
		}
		if (typeof el === 'number') {
			busCount++;
			if (busCount % 2) {
				busCost += 1.5;
			}
		}
	});
	return `£${(tubeCost + busCost).toFixed(2)}`;
}

console.log(londonCityHacker([12, 'Central', 'Circle', 21])); //, "£7.80");
console.log(londonCityHacker(['Piccadilly', 56])); //, "£3.90");
console.log(londonCityHacker(['Northern', 'Central', 'Circle'])); //, "£7.20");
console.log(londonCityHacker(['Piccadilly', 56, 93, 243])); //, "£5.40");
console.log(londonCityHacker([386, 56, 1, 876])); //, "£3.00");
console.log(londonCityHacker([])); //, "£0.00");
