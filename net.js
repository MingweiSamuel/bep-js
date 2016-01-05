var net = require('net');

var server = net.createServer(function(client) {
    console.log('connected');
});

server.listen(8124);

var client = net.connect({port: 8124}, function() {
    console.log('client connected');
    client.write('world!\r\n');
});
client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});
client.on('end', function() {
    console.log('client disconnected');
});
