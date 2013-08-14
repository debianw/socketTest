/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , port = process.env.PORT || 3000;


/**
 * Middelwares.
 */

app.use(express.static(__dirname + '/public'));

io.set('transports', [
  'websocket',
  'xhr-polling',
  'jsonp-polling'
]);

/**
 * Socket events.
 */

io.sockets.on('connection', function (socket) {
	socket.emit('connected', {
		message: 'client connected ' + (new Date())
	});

	socket.on('my other event', function (data) {
	  console.log('my other event: ', data);

	  socket.emit('data received', {date: new Date()});
	});
});

/**
 *
 */

server.listen(port, function () {
  console.log("Listening on port %d", port);
});
