var express =require("express"),
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http);

app.set("view engine", "ejs");

app.get('/', function(req, res){
	res.render("index");
})

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
// 	});
// });




// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
// });


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


http.listen(3000, function(){
	console.log("port 3000");
})
