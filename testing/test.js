

// for(var i = 0;i<5000;i++){
setInterval(function() {

        var numConnected = 0;
        var socket = require('socket.io-client')('http://localhost:3000');
        socket.on('connect', function(){
                numConnected++;
                console.log('client connected');
        });
        socket.on('halo', function(data){
                console.log(data);
        });
        socket.on('disconnect', function(){
                numConnected--;
                console.log('client disconnected.');
        });
},100)
//tested project
//tested 1
// }
