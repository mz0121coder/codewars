/*
A website named "All for Five", sells many products to registered clients that cost all the same (5 dollars, the price is not relevant). Every user receives an alphanumeric id code, like D085. The page tracks all the total, that the clients do. For each purchase of a certain client, his/her id user will be registered once.

You will be given an uncertain number of arrays that contains strings (the id code users). Each array will represent the total that the users do in a month. You should find the total number of total of the users that have bought in all the given months (the clients that their id code are present in all the arrays). e.g.:

a1 = ['A042', 'B004', 'A025', 'A042', 'C025']
a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042']
a3 = ['A042', 'A025', 'B004']
The topPurchases will be:

'A042'---> 5 times
'A025'---> 3 times
'B004'---> 3 times
It may be that not even a single user has purchased in all the months

a1 = ['A043', 'B004', 'A025', 'A042', 'C025']
a2 = ['B009', 'B040', 'B003', 'A042', 'A027', 'A044']
a3 = ['A041', 'A026', 'B005']
Even though '0042' is present in two arrays, is not present in all the arrays.

The function that solves this challenge will be called as: id_best_users().

The entries of the function and the output for the cases above will be:

a1 = ['A042', 'B004', 'A025', 'A042', 'C025']
a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042']
a3 = ['A042', 'A025', 'B004']
id_best_users(a1, a2, a3) == [[5, ['A042']], [3, ['A025', 'B004']]]

a1 = ['A043', 'B004', 'A025', 'A042', 'C025']
a2 = ['B009', 'B040', 'B003', 'A042', 'A027', 'A044']
a3 = ['A041', 'A026', 'B005']
id_best_users(a1, a2, a3) == []
As you can see the output will have the total number of total in decreasing order. If two users have the same amount of total total, they will be sorted by their id user string value.

More examples will be given in the example tests.

Features of the Random Tests:

Low Performance Tests
maximum amount of users: 200
maximum number of months: 8
maximum amount of total per month: 100

High Performance Tests
maximum amount of users: 90000
maximum number of months: 12
maximum amount of total per month: 80000
Enjoy it!!
*/

/*
track total user purchases in all months
track total active months for all users
create obj with keys equal to active months, 
values equal to an array of users who have same purchases
e.g. {5: [(users who have purchased in 5 total months)]}
sort the entries from highest to lowest, and sort values
return formatted result
*/

function idBestUsers() {
	// total purchases in all months
	const totalPurchases = [...arguments].flat().reduce((obj, user) => {
		obj[user] = user in obj ? obj[user] + 1 : 1;
		return obj;
	}, {});
	// active months for each user
	const months = {};
	for (const month of arguments) {
		const users = [...new Set(month)];
		users.forEach(
			user => (months[user] = user in months ? months[user] + 1 : 1)
		);
	}
	// months active : [users with same value]
	const topPurchases = {};
	const allMonths = [...arguments].length;
	for (const user in months) {
		if (months[user] === allMonths) {
			const total = totalPurchases[user];
			topPurchases[total] =
				total in topPurchases ? [...topPurchases[total], user] : [user];
		}
	}

	const topUsers = Object.entries(topPurchases)
		.sort((a, b) => Number(b[0]) - Number(a[0]))
		.map(item => {
			const [total, users] = item;
			return [Number(total), [...users].sort()];
		});

	return topUsers;
}

let a1 = ['A042', 'B004', 'A025', 'A042', 'C025'];
let a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042'];
let a3 = ['A042', 'A025', 'B004'];
console.log(idBestUsers(a1, a2, a3)); //, [[5, ['A042']], [3, ['A025', 'B004']]])

a1 = ['A043', 'B004', 'A025', 'A042', 'C025'];
a2 = ['B009', 'B040', 'B003', 'A042', 'A027', 'A044'];
a3 = ['A041', 'A026', 'B005'];
console.log(idBestUsers(a1, a2, a3)); //, []);

a1 = ['A042', 'B004', 'A025', 'A042', 'C025'];
a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042'];
a3 = [
	'A042',
	'B004',
	'A025',
	'A042',
	'C025',
	'B009',
	'B040',
	'B004',
	'A042',
	'A025',
	'A042',
];
var a4 = ['A042', 'A025', 'B004'];
console.log(idBestUsers(a1, a2, a3, a4)); //, [[9, ['A042']], [5, ['A025', 'B004']]]);
