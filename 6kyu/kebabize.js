/*Modify the kebabize function so that it converts a camel case string into a kebab case.
"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:
the returned string should only contain lowercase letters*/
function kebabize(str) {
	let result = ``;
	for (let x = 0; x < str.length; x++) {
		if (str[x].match(/[A-Z]/)) {
			result += `-${str[x].toLowerCase()}`;
		} else if (str[x].match(/[a-z]/)) {
			result += `${str[x]}`;
		}
	}
	return result.replace(/^-/, '');
}

/*describe('tests', () => {
  it('fixed tests', () => {
    Test.assertEquals(kebabize('myCamelCasedString'), 'my-camel-cased-string');
    Test.assertEquals(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
  });
});*/
console.log(kebabize('myCamelCasedString'));
console.log(kebabize('myCamelHas3Humps'));
console.log(kebabize('CAMEL'));
