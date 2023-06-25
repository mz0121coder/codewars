/*
JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.

You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.

For example:

typing(2);            //returns "number=2"
typing(true);         //returns "boolean=true"
typing("test");       //returns "string="test""
typing([1,2,3]);      //returns "object=[1,2,3]"
typing({a:1,b:2});    //returns "object={"a":1,"b":2}"
typing(function(){}); //returns "function=function (){}"
typing(undefined);    //returns "undefined"
*/

function typing(param) {
	if (typeof param === 'undefined') {
		return 'undefined';
	}
	if (typeof param === 'object') {
		return param[0] ? `object=[${param}]` : `object=${JSON.stringify(param)}`;
	}
	if (typeof param === 'string') {
		return `string="${param}"`;
	}
	return `${typeof param}=${param}`;
}

console.log(typing(1)); //, "number=1");
console.log(typing(true)); //, "boolean=true");
