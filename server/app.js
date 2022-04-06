const cors = require('cors');
const morgan = require('morgan');
const { serverPort } = require('./keytoserver/key.js');
const router = require('./routes/routes.js');

module.exports = (app) => {
	//Port number
	app.set('port', serverPort.PORT || '');

	// middleware
	app.use(cors());
	app.use(morgan('dev'));

	// routes
	app.use('/api', router);

	return app;
};
