var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.all('/*', function(req, res){
	res.send('\
		<!DOCTYPE html>\
		<html>\
			<head>\
				<title>MEAN Todo App</title>\
				<h1> This is a test line.</h1>\
				<base href="/">\
			</head>\
			<body>\
				<div ui-view></div>\
				<script src="bundle.js"></script>\
			</body>\
		</html>\
		');
});

app.listen(PORT, function(){
	console.log('Server running on ' + PORT);
});