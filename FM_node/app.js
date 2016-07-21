const http = require('http'),
			port = 3000;

const requestHandler = (request, response) => {
	console.log(request.url);
	response.end('Hello Node.js Server!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
		if (err) {
			return console.log('bad', err);
		}
		console.log('server is listening on ' + port + 'new new');
});


// http.createServer((req, res) => {
// 	res.writeHead({
// 		'Content-Type':'text/plain'
// 	});
// 	res.end('hello world');
// }).listen(3000);
