/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
PARSINGREGULAR EXPRESSIONS*/
function domainName(url) {
	const exceptions = ['http', 'https', 'www'];
	return url
		.split(/[^a-z0-9-]/)
		.filter(s => s.match(/[a-z]+|[0-9]+/) && !exceptions.includes(s))[0];
}
console.log(domainName('https://www.bu-s4fwqqm82g6erorkey7i.jp/default.html'));
console.log(domainName('https://www.cnet.com'));
console.log(domainName('https://youtube.com'));
console.log(domainName('www.xakep.ru'));
console.log(domainName('http://google.co.jp'));
console.log(domainName('http://github.com/carbonfive/raygun'));
console.log(domainName('http://www.zombie-bites.com'));
