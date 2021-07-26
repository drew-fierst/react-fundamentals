const express = require('express');
const bodyParser = require('body-parser');
const port = 8005;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// supports CORS
app.options("*", function (req, res) {
    console.log("OPTIONS");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "format, Accept, X-Requested-With, Origin, Content-Type ");
    res.end();
});

let toDos = [
    { id: 1, text: 'Buy groceries'}, 
    { id: 2, text: 'Wash the car'}, 
    { id: 3, text: 'Clean the house'}
];
let nextId = 4;

//
//  Main set of functions for the ToDo API
//
app.get("/todo/:id", function (req, resp) {
    const id = req.params.id;
    let results = {"error" : "Not found."};
    
    console.log("GET todo: " + id);
	toDos.every(function(item){
		if (item.id == id) {
            results = item;
            return false;
        }
        return true;
	});
	
    resp.setHeader("Access-Control-Allow-Origin", "*");
	resp.json(results);		
    resp.end();
});


app.get("/todo", function (req, resp) {

    console.log("GET all ToDo items");

    resp.setHeader("Access-Control-Allow-Origin", "*");
	resp.json(toDos);
    resp.end();
});


app.post("/todo", function (req, resp) {
    const text = req.body.text;
    console.log("POST new ToDo: " + text);

    toDo = {id: nextId++, text: text };
    toDos.push(toDo);

    resp.setHeader("Access-Control-Allow-Origin", "*");
	resp.json({ success: true, item: toDo });
    resp.end();
});


app.delete("/todo/:id", function (req, resp) {
    const id = req.params.id;
    let results = {"error" : "Not found."};
    
    console.log("DELETE ToDo: " + id);
	
    for(var i=0,len=toDos.length; i<len; i++) {
    	if (toDos[i].id == id) {
    		toDos.splice(i,1);
    		results = {success: true};
    		break;
    	}
    }

    resp.setHeader("Access-Control-Allow-Origin", "*");
	resp.json(results);
    resp.end();
});


app.put("/todo/:id", function (req, resp) {
    const id = req.params.id;
    const text = req.body.text;
    let results = {"error" : "Not found."};
    
    console.log("PUT ToDo: " + id + " updating " + text);
	
    toDos.forEach(function(item){
		if (item.id == id) {
			item.text = text;
			results = { success: true, item: item};
		}
	});

    resp.setHeader("Access-Control-Allow-Origin", "*");
	resp.json(results);
    resp.end();
});


app.listen(port);
console.log('Server running at: http://localhost:' + port );

