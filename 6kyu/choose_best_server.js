/*
Solemn declaration:
This Kata is purely fictitious and any similarity is just coincidence ;-)

Story
In the Fake website #1, John finally chose a good name for his website with your help: c0dewars.com. This time, he needs to choose a best server to create his website.

What is a best server? John mainly from two aspects to consider:

One is the performance, including network delay and disconnection
rate; The other is the price. that is, the annual rent of the server.
John has selected some servers, asked the annual rental price of these servers, and each server for 1 day of performance testing (24 hours). Get one test data per hour, test data is the value of network delay. Unit: millisecond.

Please help John write the function bestServer to find the best choice. Function bestServer accept 1 parameter servers, it is an array of servers data.

Rules:
Each element of servers is an object, like this:

{name:"server1", 
 price:300, 
 testdata:[110,120,110,120,130,150,-1,100,120,110,140,200
,150,180,120,110,120,130,150,-1,100,120,110,140]}
testdata is a number array, it always contains 24 test datas. You need to calculate the average network delay and disconnection rate of the server according to the data.

-1 means disconnection. Like the example above, there are two -1, so its disconnection rate is 2 / 24 = 8.33%; In addition, you should not calculate the -1 data when calculating the average network delay. The average network delay in the above example should be the average of the 22 datas.

You should compare three indicators in all servers, and returns a server with the lowest value. The importance of the three indicators: disconnection rate > average network delay > price

If one of the three indicators of a server exceeds the threshold value, this server should not be selected. the threshold value is:

disconnection rate <= 20%
network delay of each hours <= 300ms (not the average value)
price <= $500
The result should be a string(the name of best server), if no best server found, return an empty string. If there are more than one server have same values, should choose the element which has smaller index.

Examples:
var sv1={name:"server1",price:300,testdata:[50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]},
    sv2={name:"server2",price:400,testdata:[50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]},
    sv3={name:"server3",price:300,testdata:[-1,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]},
    sv4={name:"server4",price:300,testdata:[-1,-1,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]},
    sv5={name:"server5",price:400,testdata:[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]},
    sv6={name:"server6",price:300,testdata:[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]},
    sv7={name:"server7",price:200,testdata:[-1,-1,-1,-1,-1,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]},
    sv8={name:"server8",price:200,testdata:[301,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]},
    sv9={name:"server9",price:501,testdata:[40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]};
   
    bestServer([sv1,sv2]) should return "server1"
    bestServer([sv3,sv4]) should return "server3"
    bestServer([sv1,sv5]) should return "server5"
    bestServer([sv5,sv6]) should return "server6"
    bestServer([sv1,sv7]) should return "server1"
    bestServer([sv7,sv8,sv9]) should return ""
*/

function bestServer(servers) {
	if (!servers.length) return '';
	const metrics = [];
	// calculate disconnect rate and average delay for each server
	servers.forEach(server => {
		const disconnects = [];
		const delays = [];
		let delaySum = 0;
		let aboveThreshold = false;
		// use numbers from test data
		for (const num of server.testdata) {
			if (num === -1) disconnects.push(-1);
			if (num > -1) {
				delays.push(num);
				delaySum += num;
			}
			if (num >= 300) aboveThreshold = true;
		}
		const disconnectRate = (disconnects.length / 24) * 100;
		const averageDelay = delaySum / delays.length;
		if (disconnectRate >= 20 || server.price >= 500) aboveThreshold = true;
		// add summary object if server is within threshold
		if (!aboveThreshold)
			metrics.push({
				name: server.name,
				disconnectRate,
				averageDelay,
				price: server.price,
			});
	});
	// score server by priority - disconnect rate, avg delay, price
	const scoreServer = item =>
		10000 * item.disconnectRate + 100 * item.averageDelay + item.price;
	// sort servers from lowest to highest score
	const result = metrics.sort((a, b) => scoreServer(a) - scoreServer(b));
	return !result.length ? '' : result[0].name;
}

const sv1 = {
		name: 'server1',
		price: 300,
		testdata: [
			50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
			50, 50, 50, 50, 50, 50,
		],
	},
	sv2 = {
		name: 'server2',
		price: 400,
		testdata: [
			50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
			50, 50, 50, 50, 50, 50,
		],
	},
	sv3 = {
		name: 'server3',
		price: 300,
		testdata: [
			-1, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
			50, 50, 50, 50, 50, 50,
		],
	},
	sv4 = {
		name: 'server4',
		price: 300,
		testdata: [
			-1, -1, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
			50, 50, 50, 50, 50, 50,
		],
	},
	sv5 = {
		name: 'server5',
		price: 400,
		testdata: [
			40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
			40, 40, 40, 40, 40, 40,
		],
	},
	sv6 = {
		name: 'server6',
		price: 300,
		testdata: [
			40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
			40, 40, 40, 40, 40, 40,
		],
	},
	sv7 = {
		name: 'server7',
		price: 200,
		testdata: [
			-1, -1, -1, -1, -1, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
			40, 40, 40, 40, 40, 40,
		],
	},
	sv8 = {
		name: 'server8',
		price: 200,
		testdata: [
			301, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
			40, 40, 40, 40, 40, 40,
		],
	},
	sv9 = {
		name: 'server9',
		price: 501,
		testdata: [
			40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
			40, 40, 40, 40, 40, 40,
		],
	};

console.log(bestServer([sv1, sv2])); // "server1"
console.log(bestServer([sv3, sv4])); // "server3"
console.log(bestServer([sv1, sv5])); // "server5"
console.log(bestServer([sv5, sv6])); // "server6"
console.log(bestServer([sv1, sv7])); // "server1"
console.log(bestServer([sv7, sv8, sv9])); // ""
