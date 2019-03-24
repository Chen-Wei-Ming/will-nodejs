'use strict';

const http = require('http');

var server = http.createServer(function(request, response) {

 });

 server.listen(process.env.PORT || 8080 , () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
