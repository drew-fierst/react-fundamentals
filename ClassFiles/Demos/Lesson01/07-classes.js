class Person {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}

	sayHello() {
		console.log('Hi, my name is ' + this.name + ' and you can contact me at ' + this.email + '.');
	}
}

const p1 = new Person('Felicia', 'felicia@example.com');
p1.sayHello();

class Employee extends Person {
	constructor(name, email, title) {
		super(name, email);
		this.title = title;
	}
}

const e1 = new Employee('Raj', 'raj@example.com', 'Developer/Analyst');
e1.sayHello();
