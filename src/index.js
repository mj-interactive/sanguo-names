var uniqueRandomArray = require('unique-random-array');
var sanGuoNames = require('./sanguo-names.json');

module.exports = {
	all: sanGuoNames,
	random: uniqueRandomArray(sanGuoNames)
};