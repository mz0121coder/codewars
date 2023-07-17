/*
DESCRIPTION:
For long period JavaScript warriors trained a lot in coding kata. But to find way warrior also need physical kata. Some of warriors forgot about this fact and enemies can use this weakness, your clan is under threat. You are chosen to fix this situation. Write a function to calculate Body mass index for each warrior.

bmi = weight / (height*height)

where weight is in kg and height is in meters
Warriors know only their height (in centimetres) and weight (in kilogrames). Your task is to return an object with fields

value - calculated Body mass index, as a string, rounded to the first decimal.

category - related category, as a string (from https://en.wikipedia.org/wiki/Body_mass_index ; see below). Note: determine the category before rounding the BMI.

Ex :

calculateBmi(65,175)
returns: {value: "21.2", category: "Normal (healthy weight)"}
A constant DATA is preloaded for you. It contains the names of all the categories and their boundaries:

from (kg) is inclusive.
to (kg) is exclusive.
const DATA = [
//  from,  to,       category
    [0,    15,       "Very severely underweight"],
    [15,   16,       "Severely underweight"],
    [16,   18.5,     "Underweight"],
    [18.5, 25,       "Normal (healthy weight)"],
    [25,   30,       "Overweight"],
    [30,   35,       "Obese Class I (Moderately obese)"],
    [35,   40,       "Obese Class II (Severely obese)"],
    [40,   45,       "Obese Class III (Very severely obese)"],
    [45,   50,       "Obese Class IV (Morbidly obese)"],
    [50,   60,       "Obese Class V (Super obese)"],
    [60,   Infinity, "Obese Class VI (Hyper obese)"],
];
*/

function calculateBmi(weight, height) {
	const result = {};
	const metres = height / 100;
	const bmi = Number((weight / (metres * metres)).toFixed(1));
	result.value = bmi;
	switch (true) {
		case bmi < 15:
			result.category = 'Very severly underweight';
			break;
		case bmi > 15 && bmi < 16:
			result.category = 'Severely underweight';
			break;
		case bmi > 16 && bmi < 18.5:
			result.category = 'Underweight';
			break;
		case bmi > 18.5 && bmi < 25:
			result.category = 'Normal (healthy weight)';
			break;
		case bmi > 25 && bmi < 30:
			result.category = 'Overweight';
			break;
		case bmi > 30 && bmi < 35:
			result.category = 'Obese Class I (Moderately obese)';
			break;
		case bmi > 35 && bmi < 40:
			result.category = 'Obese Class II (Severely obese)';
			break;
		case bmi > 40 && bmi < 45:
			result.category = 'Obese Class III (Very severely obese)';
			break;
		case bmi > 45 && bmi < 50:
			result.category = 'Obese Class IV (Morbidly obese)';
			break;
		case bmi > 50 && bmi < 60:
			result.category = 'Obese Class V (Super obese)';
			break;
		default:
			result.category = 'Obese Class VI (Hyper obese)';
	}
	return result;
}
