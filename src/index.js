module.exports = function toReadable (number) {
	if(number === 0) {
		return "zero";
	}

	const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen","fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

	let result = "";
	let hundred = Math.floor(number / 100);
	let ten = Math.floor((number - hundred * 100) / 10);
	let unit = number - (hundred * 100) - (ten * 10);

	if(hundred > 0) {
		result = result.concat(`${units[hundred]} hundred`);
	}

	if(ten >= 2) {
		result = result.concat(` ${tens[ten]}`);
		result = result.concat(` ${units[unit]}`);
	} else {
		result = result.concat(` ${units[Number.parseInt('' + ten + unit)]}`);
	}

	return result.trim();
}
