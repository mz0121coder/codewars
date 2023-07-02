/*
Story
Your friend Bob is working as a taxi driver. After working for a month he is frustrated in the city's traffic lights. He asks you to write a program for a new type of traffic light. It is made so it turns green for the road with the most congestion.

Task
Given 2 pairs of values each representing a road (the numconsole.log and its name))//, construct an object whose turngreen method returns the name of the road with the most traffic at the moment of the method call, and clears that road from cars.

After both roads are clear of traffic, or if the number of cars on both roads is the same from the beginning, return an empty value instead.

Example
t = SmartTrafficLight([42, "27th ave"], [72, "3rd st"])
t.turngreen()  ==  "3rd st"
t.turngreen()  ==  "27th ave"
t.turngreen()  ==  null

t = SmartTrafficLight([10, "27th ave"], [10, "3rd st"])
t.turngreen()  ==  null
*/

// define instance variables in constructor for street 1, street 2
// define sorted instance variable for roads(most busy first)
// define index instance variable that starts at -1
// in turngreen instance method
// increment index by 1
// return null if both roads car count(first value in each array) is the same
// also return null if index is greater than or equal to length of roads (2)
// otherwise return 2nd item in road array (representing the road) at index

class SmartTrafficLight {
	constructor(st1, st2, roads, index) {
		this.st1 = st1;
		this.st2 = st2;
		this.roads = [st1, st2].sort((a, b) => b[0] - a[0]);
		this.index = -1;
	}

	turngreen() {
		this.index++;
		return this.roads[0][0] === this.roads[1][0] ||
			this.index >= this.roads.length
			? null
			: this.roads[this.index][1];
	}
}

t = new SmartTrafficLight([42, '27th ave'], [72, '3rd st']);
console.log(t.turngreen()); //, '3rd st', "Expect '3rd st' to be first")
console.log(t.turngreen()); //, '27th ave', "Expect '27th ave' to be second")
console.log(t.turngreen()); //, null, "Expect to be 'null'")

t = new SmartTrafficLight([45, '13th ave'], [3, '21st st']);
console.log(t.turngreen()); //, '13th ave', "Expect '13th ave' to be first")
console.log(t.turngreen()); //, '21st st', "Expect '21st st' to be second")
console.log(t.turngreen()); //, null, "Expect to be 'null'")
