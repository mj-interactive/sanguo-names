var expect = require('chai').expect;
var sanguoNames = require('./index');

describe('sanguo-names', function() {

	describe('all', function() {
		it('should return an array of strings', function() {
			expect(sanguoNames.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string';
				});
			}
		});

		it('should always contain Zhao Yun', function () {
			expect(sanguoNames.all).to.include('Zhao Yun');
		});
	});

	describe('random', function () {
		it('should return a random name from the sanguoNames.all', function () {
			var randomName = sanguoNames.random();
			expect(sanguoNames.all).to.include(randomName);
		});

		it('should return an array of random names from the sanguoNames.all if pass an number', function () {
			var randomNames = sanguoNames.random(3);
			expect(randomNames).to.have.length(3);
			randomNames.forEach(function(name) {
				expect(sanguoNames.all).to.include(name);
			})
		});
	});

})