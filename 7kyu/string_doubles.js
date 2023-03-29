/* In this Kata, you will write a function doubles that will remove double string characters that are adjacent to each other.

For example:

doubles('abbcccdddda') = 'aca', because, from left to right:

a) There is only one 'a' on the left hand side, so it stays.
b) The 2 b's disappear because we are removing double characters that are adjacent. 
c) Of the 3 c's, we remove two. We are only removing doubles. 
d) The 4 d's all disappear, because we first remove the first double, and again we remove the second double.
e) There is only one 'a' at the end, so it stays.
Two more examples: doubles('abbbzz') = 'ab' and doubles('abba') = "". In the second example, when we remove the b's in 'abba', the double a that results is then removed.

The strings will contain lowercase letters only. More examples in the test cases.

Good luck! */

const doubles = s => {
	// remove doubles and push to test array
	const test = [s.replace(/(.)\1/g, '')];
	// if the resulting string produces a double,
	// repeat the replace method until no doubles
	// e.g. 'abba' => 'aa' => ''
	for (let i = test.length - 1; i < Infinity; i++) {
		if (test[i].match(/(.)\1/g)) {
			test.push(test[i].replace(/(.)\1/g, ''));
		} else {
			break;
		}
	}
	return test[test.length - 1];
};

console.log(doubles('abbbzz')); //,'ab')
console.log(doubles('zzzzykkkd')); //,'ykd')
console.log(doubles('abbcccdddda')); //,'aca')
console.log(doubles('vvvvvoiiiiin')); //,'voin')
console.log(doubles('rrrmooomqqqqj')); //,'rmomj')
console.log(doubles('xxbnnnnnyaaaaam')); //,'bnyam')

function Navbar(props) {
	return (
		<>
			<div>Welcome {props.user}</div>
			<p>You've got {props.notifications} notifications</p>
		</>
	);
}

function Button(props) {
	return !props.hasOwnProperty('size') ? (
		<button className='btn-medium'>Text here</button>
	) : (
		<button className={`btn-${props.size}`}>Text here</button>
	);
}
