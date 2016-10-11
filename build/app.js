/// <reference path="typings/index.d.ts" />
"use strict";
//import express application in
const express = require("express");
//create express instance (returns express.Express type)
let app = express();
/*
Root / Home page - controllers are of the form
(<express.Request>request, <express.Response>response) => {...}
*/
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(3000, () => {
    console.log("Server Running!");
});
