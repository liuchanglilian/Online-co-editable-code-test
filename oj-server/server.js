var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var path = require('path');
var mongoose = require("mongoose");
var http = require('http');

var socketIo = require('socket.io');
var io = socketIo();
var socketService = require('./services/SocketService.js')(io);
mongoose.connect("mongodb://user:user@ds217310.mlab.com:17310/coj");
app.use(express.static(path.join(__dirname,'../public')));
app.use("/", indexRouter);
app.use("/api/v1",restRouter);
app.use("/",function(req,res){
    //if all the url above didn't handle the request, then the request will be send to the
    //client side, and the client side has the code to handle this urls
    res.sendFile("index.html",{root: path.join(__dirname, '../public/')});
});

var server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('error', onError);
server.on('listening', onListening);

function onError(error){
    throw error;
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log("in listening");
    console.log('Listening on ' + bind);
}

