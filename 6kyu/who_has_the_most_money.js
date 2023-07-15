/*You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:

Each student will have a unique name
There will always be a clear winner: either one person has the most, or everyone has the same amount
If there is only one student, then that student has the most money
*/

/*
define variable for most money
loop through students
on each iteration:
calculate total money and add it as a property
reassign most money whenever there is a higher value

then find all students with most money
if more than one, return 'all'
otherwise return student with most money
*/

class Student {
	constructor(name, fives, tens, twenties) {
		this.name = name;
		this.fives = fives;
		this.tens = tens;
		this.twenties = twenties;
	}
}

function mostMoney(students) {
	let max = 0;
	students.forEach(student => {
		let total = 0;
		total += student.fives * 5;
		total += student.tens * 10;
		total += student.twenties * 20;
		if (total > max) {
			max = total;
		}
		student.total = total;
	});
	const result = students.filter(student => student.total === max);
	return result.length > 1 ? 'all' : result[0].name;
}

const andy = new Student('Andy', 0, 0, 2);
const stephen = new Student('Stephen', 0, 4, 0);
const eric = new Student('Eric', 8, 1, 0);
const david = new Student('David', 2, 0, 1);
const phil = new Student('Phil', 0, 2, 1);
const cam = new Student('Cameron', 2, 2, 0);
const geoff = new Student('Geoff', 0, 3, 0);

// "What happens if one student has the most money?"
console.log(mostMoney([andy, stephen, eric, david, phil])); //, "Eric")
console.log(mostMoney([cam, geoff, andy, stephen, eric, david, phil])); //, "Eric")

// "What happens if there is only one student?"
console.log(mostMoney([andy])); //, "Andy")
console.log(mostMoney([stephen])); //, "Stephen")

// "What happens if all students have the same amount of money?"
console.log(mostMoney([cam, geoff])); //, "all")
console.log(mostMoney([david, cam, geoff])); //, "all")
