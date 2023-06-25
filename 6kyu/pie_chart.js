/*
We are to draw a pie chart! Our parameter shall be given in JSON.

The goal of this kata is to return a JSON containing each key with it corresponding angle to two decimal places when necessary.

Example
Parameter {"Hausa": 4, "Yoruba" : 5, "Igbo" : 6, "Efik" : 1, "Edo" : 4} should return a JSON like {"Hausa":72,"Yoruba":90,"Igbo":108,"Efik":18,"Edo":72}
Parameter {"English": 4, "Polish" : 12, "Russian" : 10, "Spanish" : 2} should return a JSON like {"English":51.43,"Polish":154.29,"Russian":128.57,"Spanish":25.71}
Parameter {"Android": 500, "iOS" : 270, "Microsoft" : 230} should return a JSON like {"Android":180,"iOS":97.2,"Microsoft":82.8}
*/

// convert obj from JSON to a javascript object
// get sum of all values in object
// divide 360 by sum to get degrees per unit
// loop through the object, add its key-value pairs to result
// multiplying value by degrees per unit (to 2 decimal places when necessary)
// stringify and return result

function pieChart(obj) {
	const result = {};
	const object = JSON.parse(obj);
	const degrees =
		360 / Object.values(object).reduce((acc, curr) => acc + curr, 0);
	for (const key in object) {
		const value = object[key] * degrees;
		result[key] = value.toString().match(/\.\d{2,}$/)
			? Number(value.toFixed(2))
			: value;
	}
	return JSON.stringify(result);
}
