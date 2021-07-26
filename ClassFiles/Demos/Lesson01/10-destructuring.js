function calculateVolume({ radius, height }) {
	const volume = radius * radius * Math.PI * height;
	console.log('The cylinder volume is: ', volume);
}

const dimensions = { height: 2, radius: 1.3 };
calculateVolume(dimensions);
