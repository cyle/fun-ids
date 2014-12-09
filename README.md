# Fun IDs

Because why not. [appear.in](https://appear.in/) hasn't made their method public yet.

Creats fun identifier strings like:

	charming-dumps
	fiery-mover
	heavenly-illustrator
	totemic-matrix
	delicate-threshold
	dripping-loathing

Awesome. Easy IDs for you to say out loud and share.

## Usage

Just `npm install fun-ids` and then:

    var fun_ids = require('fun-ids');
	console.log(fun_ids.new_id());

Edit `adjectives.json` and `nouns.json` as you see fit. Make sure there are lots.

You can see how many possible unique IDs there are in the current set by using the `possible_ids()` method:

	var fun_ids = require('fun-ids');
	console.log(fun_ids.possible_ids());

That is all.

## Notes

There are no collision detection functions here. You'll have to do that part.