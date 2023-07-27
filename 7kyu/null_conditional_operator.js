/*
In ECMAScript 2020, there is a new operator ?. called optional chaining. The operator is available since Node.js v14.

It's nothing revolutionary - just syntactic sugar but pretty neat one.

Use case
Imagine you have a Car, car has an Engine, engine has a GearBox and gear box has some property you are interested in, for example NumberOfGears. Now, car could be from junkyard and gear box or even engine could be missing (null).

How to determine number of gears of given car?

Instruction
Complete the method called getNumberOfGears to the prototype of the Car class. This method will return the value of the numberOfGears property of gear box or null if gear box is missing.

Note that property identifiers are in camelCase, in JS.

Constrain
Find some information about ?. and ?? operators and try to write the method without any if or conditional operator ?:.
*/

Car.prototype.getNumberOfGears = function getNumberOfGears(car) {
	return this?.engine?.gearBox?.numberOfGears ?? null;
};
