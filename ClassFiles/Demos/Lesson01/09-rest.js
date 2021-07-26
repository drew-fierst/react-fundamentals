function requestVehicle(type, color, ...options) {
	console.log('You want a ' + color + ' ' + type + ' with the following options:');
	console.log(options.join(', '));
}

requestVehicle('car', 'blue', 'alloy wheels', 'premium stereo');
requestVehicle('truck', 'silver', 'cruise control', 'leather seats');
