
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
// var redis = require('socket.io-redis');
// io.adapter(redis({ host: 'localhost', port: 6379 }));
var numConnected = 0;

app.listen(3500);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
        numConnected++;
        console.log('client connected ('+numConnected+').');
  socket.emit('halo', { hello: 'world '+numConnected });
        socket.on('disconnect', function(){
                numConnected--;
                console.log('client disconnected ('+numConnected+').')
        });
});

