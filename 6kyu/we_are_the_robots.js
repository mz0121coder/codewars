/*------------------------------------------------------------------
 we are programmed just to do anything you want us to
          w e  a r e  t h e  r o b o t s
                         

-----------------------------------------------------------[ d[(0)(0)]b]
Task..... You will receieve an array of strings such as

a = ["We're functioning automatik d[(0)(0)]b","And we are dancing mechanik d[(0)(0)]b"]
Count the robots represented by d[(0)(0)]b

Unless of course the factory replaced a part on the robot.....

d[(0)(0)]b could look a little different depending on the supplier maybe like this 

d[(0)(0)]B or d[(0)(0}]B 
It's pretty random actually but with a global supply chain it's hard to control which part you get. Most of the parts are made global except the ones made in the factory which do not change.

d[(0)(0)]B 

In all robots the eyes do not change.

d[(0)(0)]B 

...0..0...
   ^  ^            
   |  | 

The rest of the body can change at random.

legs any in => abcdefghijklmnopqrstuvwxyz
...0..0... 
^        ^             
|        |

body any in => |};&#[]/><()*


...0..0... 
 ^^ ^^ ^^            
 || || ||           

There may be cases where a part is totally missing and of course a robot cannot function at all without a part or where the factory put a valid part in the wrong place and it's again not a valid robot.

return an array of strings with a count of each of the following tasks.

Case insensitve count of robots in string with "automatik" or "mechanik". Strings do not contain both "automatik and "mechanik".

Return an array with the count like below

a[0] = automatik count
a[1] = mechanik count

["1 robots functioning automatik", "1 robots dancing mechanik"]
to pay tribute...respect :)

https://en.wikipedia.org/wiki/The_Robots

Songwriters: HUETTER, RALF / SCHNEIDER-ESLEBEN, FLORIAN / BARTOS, KARL

*/

/*
define an auto and mech count, both starting at 0
loop through each string in array a
on each iteration:
check how many robots are in the string, following this format:
body = any character from |};&#[]/><()*
1 letter, 2 body, zero, 2 body, zero, 2 body, 1 letter
(ignore case)

if string includes 'automatik' ignoring case, increase auto by robots in string
if string includes 'mechanik' ignoring case, increase mech by robots in string
return array with these counts in the correct string format
*/

function countRobots(a) {
	let auto = 0;
	let mech = 0;
	a.forEach(item => {
		const robots = item.match(
			/[a-z][|};&#\[\]\/><\(\)\*]{2}0[|};&#\[\]\/><\(\)\*]{2}0[|};&#\[\]\/><\(\)\*]{2}[a-z]/gi
		);
		if (robots !== null) {
			if (/automatik/i.test(item)) {
				auto += robots.length;
			}
			if (/mechanik/i.test(item)) {
				mech += robots.length;
			}
		}
	});
	return [
		`${auto} robots functioning automatik`,
		`${mech} robots dancing mechanik`,
	];
}

console.log(
	countRobots([
		"d (0)(0)}b We're functioning &>[0;;0&&f automatik D[(0 (0)]b",
		'and m><0(;0 ;a we dancing are Mechanic',
	])
);
