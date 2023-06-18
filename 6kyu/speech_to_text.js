/*
Siri needs you to code some new features: addition, subtraction and a weather checker. There's no need to implement the speech recognition, that's taken care of...

Examples: "Add 7 to 15." -> 22 "Subtract 7 from 15." -> 8 "What is the weather at 5:30pm?" -> "sunny"

According to the weather API, it is "sunny" from (including) 6am to 6pm (including))//, and "raining" the rest of the day.

// Disclaimer: Yes, those features may already exist in Siri.
*/

// if message includes 'weather'
// check hours and minutes, return 'sunny' for times between 6am-6pm, rainy for other times
// else
// get number one and two (matches in string)
// if message includes 'Add', return numOne + numTwo
// if message includes 'Subtract', return numOne - numTwo

const bot = {
	message: function (msg) {
		if (msg.includes('weather')) {
			const hour = Number(msg.match(/\d+:/)[0].replace(':', ''));
			const minutes = Number(msg.match(/:\d+/)[0].replace(':', ''));
			return (hour < 6 && msg.includes('am')) ||
				(msg.includes('pm') && ((hour === 6 && minutes > 0) || hour > 6))
				? 'raining'
				: 'sunny';
		} else {
			const numOne = Number(msg.match(/\d+/g)[0]);
			const numTwo = Number(msg.match(/\d+/g)[1]);
			return msg.includes('Add') ? numOne + numTwo : numTwo - numOne;
		}
	},
};

console.log(bot.message('Add 5 to 20.')); //, 25, 'Addition test failed');
console.log(bot.message('Add 56 to 52.')); //, 108, 'Addition test failed');
console.log(bot.message('Add 90 to 10.')); //, 100, 'Addition test failed');
console.log(bot.message('Add 600 to 20.')); //, 620, 'Addition test failed');
console.log(bot.message('Add 1064 to 3.')); //, 1067, 'Addition test failed');
console.log(bot.message('Subtract 15 from 20.')); //, 5, 'Subtraction test failed');
console.log(bot.message('Subtract 2 from 10.')); //, 8, 'Subtraction test failed');
console.log(bot.message('Subtract 32 from 64.')); //, 32, 'Subtraction test failed');
console.log(bot.message('What is the weather at 4:30pm?')); //, "sunny", 'Weather test failed.');
console.log(bot.message('What is the weather at 2:30am?')); //, "raining", 'Weather test failed.');
console.log(bot.message('What is the weather at 10:30pm?')); //, "raining", 'Weather test failed.');
console.log(bot.message('What is the weather at 6:00pm?')); //, "sunny", 'Weather test failed.');
