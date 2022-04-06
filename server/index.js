const express = require('express');
const server = require('./app');
const app = server(express());

app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});
