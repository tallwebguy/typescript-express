/// <reference path="typings/index.d.ts" />

//import express application in
import * as express from "express";

//create express instance (returns express.Express type)
let app:express.Express = express();

/*
Root / Home page - controllers are of the form
(<express.Request>request, <express.Response>response) => {...}
*/
app.get("/", (req:express.Request, res:express.Response) => {
	res.send("Hello World!");
	res.end();
	//try typing 'req.' and see autocomplete do magic
})

app.listen(3000, () => {
	console.log("Server Running!");
})