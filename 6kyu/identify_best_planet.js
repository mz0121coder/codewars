const REQUIRED_ELEMENTS = ['H', 'C', 'N', 'O', 'P', 'Ca'];

/*
find planets with all of the required elements and a size under max size
store this as an array called planets
if planets array is empty, return ""
otherwise, from these planets, return the one with largest surface area
*/

function bestPlanet(solarSystem, maxSize) {
	const size = planet => Number(planet.match(/\d+$/)[0]);
	const planets = solarSystem
		.filter(planet => {
			const elements = planet.match(/[A-Z]{1}[a-z]*/g);
			return (
				REQUIRED_ELEMENTS.every(item => elements.includes(item)) &&
				size(planet) <= maxSize
			);
		})
		.sort((a, b) => size(b) - size(a));
	return !planets.length ? '' : planets[0];
}

console.log(
	bestPlanet(
		['OHNCCaP_100', 'OHC_200', 'OCa_50', 'OHCCaP_400', 'OHNCCaP_225'],
		250
	)
); // "OHNCCaP_225"

console.log(
	bestPlanet(
		['OHNCCaP_225', 'OHC_200', 'OCa_50', 'OHCCaP_400', 'OUNCCaP_250'],
		250
	)
); // "OHNCCaP_225"

console.log(
	bestPlanet(
		['OHNCCaP_225', 'OHC_200', 'OCa_350', 'OHCCaP_400', 'OHUNCCaP_225'],
		50
	)
); // ""

console.log(
	bestPlanet(
		['OHNCCaP_225', 'OHC_200', 'OCa_50', 'OHCCaP_400', 'OUNCCaP_250'],
		50
	)
); // ""
