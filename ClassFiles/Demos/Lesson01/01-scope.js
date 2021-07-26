function notBlockScope() {

  if (true) {
    var msg = 'Hello world';
  }

  console.log(msg);
}

notBlockScope();

function blockScope() {

  if (true) {
    let msg = 'Hello world';
  }

  console.log(msg);
}

blockScope();