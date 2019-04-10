'use strict';

const http = require('http');
const fs = require('fs') ;
const mime = require('mime-types') ;

function redirectUrl(url){
	console.log("Function : redirectUrl start") ;
	if(url == null || url == "/"){
		return "/index.html" ;
	}else{
		console.log("redirectUrl function else statement") ;
		return url ;
	}
}

const server = http.createServer(function(request, response) {
	var requestUrl = request.url ;
	console.log(requestUrl) ;
	var requestType = mime.lookup(requestUrl);
	switch(requestType){
		case "text/html":
		case "application/javascript":
		case "text/css":
			fs.readFile(__dirname+"/Web"+requestUrl , function (error, fileContent){
				if (error) {
                	response.writeHead(404);
	                response.write('Contents you are looking are Not Found');
	            } else {
	                response.writeHead(200, { 'Content-Type': requestType });
	                response.end(fileContent, "utf8");
	            }
			}) ;
		break ;
		default:
			requestUrl = redirectUrl(request.url) ;
			fs.readFile(__dirname+"/Web"+requestUrl , function (error, fileContent){
				if (error) {
                	response.writeHead(404);
	                response.write('Contents you are looking are Not Found');
	            } else {
	                response.writeHead(200, { 'Content-Type': requestType });
	                response.end(fileContent, "utf8");
	            }
			}) ;
		break ;
	}
});
 server.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`Server listening on port ${port}`);
});

