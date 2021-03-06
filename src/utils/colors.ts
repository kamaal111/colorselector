export function hexToRGB(hex: string) {
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	const newHex = hex.replace(
		shorthandRegex,
		(_m, r, g, b) => r + r + g + g + b + b
	);

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);
	if (result == null) return null;

	return {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16),
	};
}

let colorsNamesObject = {};
function getAllColors() {
	if (Object.values(colorsNamesObject).length === 0) {
		colorsNamesObject = require('../assets/color-names.json');
	}
	return colorsNamesObject;
}

export function getRandomHexColor() {
	const allColors = getAllColors();

	const allHexCodes = Object.keys(allColors);
	const index = Math.floor(Math.random() * allHexCodes.length);

	const randomHex = allHexCodes[index];
	return randomHex;
}

export default { hexToRGB, getRandomHexColor };
