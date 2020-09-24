var http = require("http");
var port = process.env.PORT;

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   var msg = 'Hello World from ' + proc.env.REGION_ID + 'hosted in ' + proc.env.REGION_NAME + '\n'
   // Send the response body as "Hello World"
   response.end(msg);
}).listen(port);

// Console will print the message
console.log('Server running');