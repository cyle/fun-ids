var nouns = require('./nouns.json');
var adjectives = require('./adjectives.json');
var Alea = require('alea');
var prng = new Alea();

module.exports = function() {
	return adjectives[random_int(0, adjectives.length - 1)].toLowerCase() + '-' + nouns[random_int(0, nouns.length - 1)].toLowerCase();
}

function random_int(min, max) {
	return Math.floor(prng() * (max - min + 1)) + min;
}