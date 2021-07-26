function logAll(msg, arr) {
	console.log();
	console.log(msg);
	arr.forEach(elt => console.log(elt));
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
logAll('all numbers', nums);

const odds = nums.filter(elt => elt % 2 === 1);
logAll('odd numbers', odds);

