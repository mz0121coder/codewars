/*Task
The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
Rules
1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

9–10: The date within the month of birth

11: The year digit from the year of birth (e.g. for 1987 it would be 7)

12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

15–16: Two computer check digits. We will always use "AA"
Your task is to code a UK driving license number using an Array of data. The Array will look like

data = ["John","James","Smith","01-Jan-2000","M"];
Where the elements are as follows

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female
You will need to output the full 16 digit driving license number.

Good luck and enjoy!*/

function driver(data) {
	let result = '';
	let monthValue = '';

	// 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)
	result += data[2].slice(0, 5).toUpperCase().padEnd(5, '9');

	// 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)
	result += data[3].slice(-2, -1);

	// 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)
	const monthNames = [
		'',
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	let monthIndex = monthNames.indexOf(data[3].split('-')[1]);

	if (data[4] === 'F') {
		monthIndex += 50;
	}

	monthValue = monthIndex.toString().padStart(2, '0');

	result += monthValue;

	// 9–10: The date within the month of birth
	result += data[3].split('-')[0];

	// 11: The year digit from the year of birth (e.g. for 1987 it would be 7)
	result += data[3].slice(-1);

	// 12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name
	let initials = data[0][0];

	if (data[1] !== '') {
		initials += data[1][0];
	} else {
		initials += '9';
	}

	result += initials;

	// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9
	result += '9';

	// 15–16: Two computer check digits. We will always use "AA"
	result += 'AA';

	return result;
}

// Example usage:
console.log(driver(['John', 'James', 'Smith', '01-Jan-2000', 'M'])); // 'SMITH001010JJ9AA'
console.log(driver(['Johanna', '', 'Gibbs', '13-Dec-1981', 'F'])); // 'GIBBS862131J99AA'
console.log(driver(['Andrew', 'Robert', 'Lee', '02-September-1981', 'M'])); // 'LEE99809021AR9AA'
