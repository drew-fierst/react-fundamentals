function doLater(fn) {
  setTimeout(fn, 3000);
}

const person = {
  name: 'Miguel',
  getGreeter: function() {
    return function() {
      console.log('Hi, my name is ', this.name);
    }
  }
}

doLater(person.getGreeter());
