'use strict';

const http = require('http');
const fs = require('fs') ;
const mime = require('mime-types') ;

const server = http.createServer(function(request, response) {
	var requestUrl = request.url ;
	var requestType = mime.lookup(requestUrl);
	console.log(requestUrl) ;
	switch(requestType){
		case "text/html":
			fs.readFile(__dirname+"/Web"+requestUrl , function (error, fileContent){
				console.log(fileContent) ;
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

