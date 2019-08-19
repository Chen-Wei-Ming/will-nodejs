const http = require('http') ;
const express = require('express') ;
const app = express() ;

http.createServer(app).listen(8080 , () => {
	console.log('Nodejs Server Listen at Port 8080 ... ') ;
}) ;

app.get("/123" , (req , res) =>{
	res.end("end test") ;
}) ;