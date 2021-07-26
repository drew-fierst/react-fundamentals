const o1 = {
	size: 'medium',
	color: 'blue',
	price: 12.95
};

const o2 = { ...o1 };
o2.price = 14.95;

const o3 = { ...o1, price: 9.95, category: 'shoes' };

console.log(o1);
console.log(o2);
console.log(o3);
