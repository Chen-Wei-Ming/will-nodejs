'use strict';

const http = require('http');

const server = http.createServer(function(request, response) {
    response.end("test") ;
});
 server.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
});

module.exports = server;
