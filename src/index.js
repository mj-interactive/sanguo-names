var uniqueRandomArray = require('unique-random-array');
var sanGuoNames = require('./sanguo-names.json');
var getRandomItem = uniqueRandomArray(sanGuoNames);

module.exports = {
	all: sanGuoNames,
	random: random
};

function random(number) {
	if (number === undefined) {
		return getRandomItem();
	} else {
		var names = [];
		for (var i = number - 1; i >= 0; i--) {
			names.push(getRandomItem());
		}
		return names;
	}
}