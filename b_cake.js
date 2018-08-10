var _ = require('lodash');

function birthdayCakeCandles(ar) {

	// sort
	ar.sort((a, b) => {
		return a-b;
	});

	// lodash, reduce
	// hash, value
	var hm = _.reduce(ar, function(hash, value) {
		// check index in array
		// type of, arr[index], undefined
		if(typeof hash[value] === 'undefined') {
			hash[value] = 1;
		} else {
			hash[value]++;
		}

		// return hash
  	return hash;
		// obj	
	}, {});

	var last;
	// loop prop
	for (var prop in hm) {
		// obj has prop
    if (hm.hasOwnProperty(prop)) {
			// prop is name of prop
			// arr[index] == value
			last = hm[prop];
    }
	}

	return last;
}


var ar = [ 3, 2, 1, 3 ];
var out = birthdayCakeCandles(ar);
console.log(out);
